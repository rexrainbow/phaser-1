import { File } from '../File';
import { GameInstance } from '../../GameInstance';
import { GetURL } from '../GetURL';
import { IFrameConfig } from '../../textures/IFrameConfig';
import { ImageTagLoader } from '../ImageTagLoader';
import { SpriteSheetParser } from '../../textures/parsers/SpriteSheetParser';

export function SpriteSheetFile (key: string, url: string, frameConfig: IFrameConfig): File
{
    const file = new File(key, url);

    file.load = () =>
    {

        file.url = GetURL(file.key, file.url, '.png', file.loader);

        if (file.loader)
        {
            file.crossOrigin = file.loader.crossOrigin;
        }

        return new Promise((resolve, reject) =>
        {

            const game = GameInstance.get();

            if (game.textures.has(file.key))
            {
                resolve(file);
            }
            else
            {
                ImageTagLoader(file).then(file =>
                {

                    const texture = game.textures.add(file.key, file.data);

                    if (texture)
                    {
                        SpriteSheetParser(texture, 0, 0, texture.width, texture.height, frameConfig);

                        resolve(file);
                    }
                    else
                    {
                        reject(file);
                    }

                }).catch(file =>
                {

                    reject(file);

                });
            }
        });
    };

    return file;
}
