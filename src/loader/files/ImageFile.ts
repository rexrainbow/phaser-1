import { File } from '../File';
import { GameInstance } from '../../GameInstance';
import { GetURL } from '../GetURL';
import { ImageTagLoader } from '../ImageTagLoader';

export function ImageFile (key: string, url?: string): File
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

                    game.textures.add(file.key, file.data);

                    resolve(file);

                }).catch(file =>
                {

                    reject(file);

                });
            }

        });
    };

    return file;
}
