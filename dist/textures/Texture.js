import Frame from './Frame';
import SetGLTextureFilterMode from '../renderer/SetGLTextureFilterMode';
import DeleteGLTexture from '../renderer/DeleteGLTexture';
import DeleteFramebuffer from '../renderer/DeleteFramebuffer';
import CreateGLTexture from '../renderer/CreateGLTexture';
import UpdateGLTexture from '../renderer/UpdateGLTexture';
export default class Texture {
    constructor(image, width, height) {
        //  Unique identifier of this Texture, if stored in the Texture Manager
        this.key = '';
        this.glIndex = 0;
        this.glIndexCounter = -1;
        if (image) {
            width = image.width;
            height = image.height;
        }
        this.image = image;
        this.width = width;
        this.height = height;
        this.frames = new Map();
        this.data = {};
        this.add('__BASE', 0, 0, width, height);
    }
    add(key, x, y, width, height) {
        if (this.frames.has(key)) {
            return null;
        }
        let frame = new Frame(this, key, x, y, width, height);
        this.frames.set(key, frame);
        if (!this.firstFrame || this.firstFrame.key === '__BASE') {
            this.firstFrame = frame;
        }
        return frame;
    }
    get(key) {
        //  null, undefined, empty string, zero
        if (!key) {
            return this.firstFrame;
        }
        if (key instanceof Frame) {
            key = key.key;
        }
        let frame = this.frames.get(key);
        if (!frame) {
            console.warn('Texture.frame missing: ' + key);
            frame = this.firstFrame;
        }
        return frame;
    }
    getFrames(frames) {
        const output = [];
        frames.forEach((key) => {
            output.push(this.get(key));
        });
        return output;
    }
    getFramesInRange(prefix, start, end, zeroPad = 0, suffix = '') {
        const frameKeys = [];
        const diff = (start < end) ? 1 : -1;
        //  Adjust because we use i !== end in the for loop
        end += diff;
        for (let i = start; i !== end; i += diff) {
            frameKeys.push(prefix + i.toString().padStart(zeroPad, '0') + suffix);
        }
        return this.getFrames(frameKeys);
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        const frame = this.frames.get('__BASE');
        frame.setSize(width, height);
    }
    setFilter(linear) {
        SetGLTextureFilterMode(this.glTexture, linear);
    }
    createGL() {
        if (this.glTexture) {
            DeleteGLTexture(this.glTexture);
        }
        this.glTexture = CreateGLTexture(this.image);
    }
    updateGL() {
        if (!this.glTexture) {
            this.glTexture = CreateGLTexture(this.image);
        }
        else {
            UpdateGLTexture(this.image, this.glTexture);
        }
    }
    destroy() {
        this.frames.clear();
        this.image = null;
        this.firstFrame = null;
        this.data = null;
        DeleteGLTexture(this.glTexture);
        DeleteFramebuffer(this.glFramebuffer);
    }
}
//# sourceMappingURL=Texture.js.map