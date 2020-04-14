import File from '../File';
import XHRLoader from '../XHRLoader';
import GameInstance from '../../GameInstance';
import GetURL from '../GetURL';
export default function JSONFile(key, url) {
    const file = new File(key, url);
    file.load = () => {
        file.url = GetURL(file.key, file.url, '.json', file.loader);
        return new Promise((resolve, reject) => {
            const game = GameInstance.get();
            if (!file.skipCache && game.cache.json.has(file.key)) {
                resolve(file);
            }
            else {
                XHRLoader(file).then(file => {
                    file.data = JSON.parse(file.data);
                    if (!file.skipCache) {
                        game.cache.json.set(file.key, file.data);
                    }
                    resolve(file);
                }).catch(file => {
                    reject(file);
                });
            }
        });
    };
    return file;
}
//# sourceMappingURL=JSONFile.js.map