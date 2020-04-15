import File from '../File';
import ImageTagLoader from '../ImageTagLoader';
import GameInstance from '../../GameInstance';
import GetURL from '../GetURL';
import SpriteSheetParser from '../../textures/SpriteSheetParser';
export default function SpriteSheetFile(key, url, frameConfig) {
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
                    const texture = game.textures.add(file.key, file.data);
                    if (texture) {
                        SpriteSheetParser(texture, 0, 0, texture.width, texture.height, frameConfig);
                        resolve(file);
                    }
                    else {
                        reject(file);
                    }
                }).catch(file => {
                    reject(file);
                });
            }
        });
    };
    return file;
}
//# sourceMappingURL=SpriteSheetFile.js.map