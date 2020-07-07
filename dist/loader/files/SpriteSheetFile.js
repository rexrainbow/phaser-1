import { TextureManagerInstance } from '../../textures/TextureManagerInstance.js';
import { File } from '../File.js';
import { GetURL } from '../GetURL.js';
import { ImageTagLoader } from '../ImageTagLoader.js';
import { SpriteSheetParser } from '../../textures/parsers/SpriteSheetParser.js';

function SpriteSheetFile(key, url, frameConfig, glConfig) {
    const file = new File(key, url);
    file.load = () => {
        file.url = GetURL(file.key, file.url, '.png', file.loader);
        if (file.loader) {
            file.crossOrigin = file.loader.crossOrigin;
        }
        return new Promise((resolve, reject) => {
            const textureManager = TextureManagerInstance.get();
            if (textureManager.has(file.key)) {
                resolve(file);
            }
            else {
                ImageTagLoader(file).then(file => {
                    const texture = textureManager.add(file.key, file.data, glConfig);
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

export { SpriteSheetFile };
