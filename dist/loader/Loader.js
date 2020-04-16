import EventEmitter from '../events/EventEmitter';
export default class Loader extends EventEmitter {
    constructor() {
        super();
        this.baseURL = '';
        this.path = '';
        this.crossOrigin = 'anonymous';
        //  -1 means load everything at once (only recommended on http/2 servers)
        this.maxParallelDownloads = -1;
        this.isLoading = false;
        this.reset();
    }
    reset() {
        this.isLoading = false;
        this.queue = new Set();
        this.inflight = new Set();
        this.completed = new Set();
        this.progress = 0;
    }
    add(...file) {
        file.forEach(entity => {
            entity.loader = this;
            this.queue.add(entity);
        });
        return this;
    }
    start(onComplete) {
        if (this.isLoading) {
            return;
        }
        this.completed.clear();
        this.progress = 0;
        if (this.queue.size > 0) {
            this.isLoading = true;
            this.onComplete = onComplete;
            this.emit('start');
            this.nextFile();
        }
        else {
            this.progress = 1;
            this.emit('complete');
            onComplete();
        }
        return this;
    }
    nextFile() {
        let limit = this.queue.size;
        if (this.maxParallelDownloads !== -1) {
            limit = Math.min(limit, this.maxParallelDownloads) - this.inflight.size;
        }
        if (limit) {
            // console.log('Batching', limit, 'files to download');
            const iterator = this.queue.values();
            while (limit > 0) {
                const file = iterator.next().value;
                // console.log('Loader.nextFile', file.key, '=>', file.url);
                this.inflight.add(file);
                this.queue.delete(file);
                file.load().then((file) => this.fileComplete(file)).catch((file) => this.fileError(file));
                limit--;
            }
        }
        else if (this.inflight.size === 0) {
            this.stop();
        }
    }
    stop() {
        this.isLoading = false;
        this.emit('complete', this.completed);
        this.onComplete();
        this.completed.clear();
    }
    updateProgress(file) {
        this.inflight.delete(file);
        this.completed.add(file);
        const totalCompleted = this.completed.size;
        const totalQueued = this.queue.size + this.inflight.size;
        if (totalCompleted > 0) {
            this.progress = totalCompleted / (totalCompleted + totalQueued);
        }
        this.emit('progress', this.progress, totalCompleted, totalQueued);
        this.nextFile();
    }
    fileComplete(file) {
        this.emit('filecomplete', file);
        this.updateProgress(file);
    }
    fileError(file) {
        this.emit('fileerror', file);
        this.updateProgress(file);
    }
    totalFilesToLoad() {
        return this.queue.size + this.inflight.size;
    }
    setBaseURL(url = '') {
        if (url !== '' && url.substr(-1) !== '/') {
            url = url.concat('/');
        }
        this.baseURL = url;
        return this;
    }
    setPath(path = '') {
        if (path !== '' && path.substr(-1) !== '/') {
            path = path.concat('/');
        }
        this.path = path;
        return this;
    }
    setCORS(crossOrigin) {
        this.crossOrigin = crossOrigin;
        return this;
    }
    setMaxParallelDownloads(max) {
        this.maxParallelDownloads = max;
        return this;
    }
}
//# sourceMappingURL=Loader.js.map