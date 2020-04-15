import File from '../File';
import ImageTagLoader from '../ImageTagLoader';
import GameInstance from '../../GameInstance';
import GetURL from '../GetURL';
export default function ImageFile(key, url) {
    const file = new File(key, url);
    file.load = () => {
        file.url = GetURL(file.key, file.url, '.png', file.loader);
        if (file.loader) {
            file.crossOrigin = file.loader.crossOrigin;
        }
        return new Promise((resolve, reject) => {
            const game = GameInstance.get();
            if (game.textures.has(file.key)) {
                resolve(file);
            }
            else {
                ImageTagLoader(file).then(file => {
                    game.textures.add(file.key, file.data);
                    resolve(file);
                }).catch(file => {
                    reject(file);
                });
            }
        });
    };
    return file;
}
//# sourceMappingURL=ImageFile.js.map