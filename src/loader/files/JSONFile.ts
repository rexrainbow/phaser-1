import { File } from '../File';
import { GameInstance } from '../../GameInstance';
import { GetURL } from '../GetURL';
import { XHRLoader } from '../XHRLoader';

export function JSONFile (key: string, url?: string): File
{
    const file = new File(key, url);

    file.load = () =>
    {

        file.url = GetURL(file.key, file.url, '.json', file.loader);

        return new Promise((resolve, reject) =>
        {

            const game = GameInstance.get();

            if (!file.skipCache && game.cache.json.has(file.key))
            {
                resolve(file);
            }
            else
            {
                XHRLoader(file).then(file =>
                {

                    file.data = JSON.parse(file.data);

                    if (!file.skipCache)
                    {
                        game.cache.json.set(file.key, file.data);
                    }

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
