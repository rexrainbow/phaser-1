import { File } from '../File';
import { XHRLoader } from '../XHRLoader';
import { GameInstance } from '../../GameInstance';
import { GetURL } from '../GetURL';

export function CSVFile (key: string, url?: string): File
{
    const file = new File(key, url);

    file.load = () => {

        file.url = GetURL(file.key, file.url, '.csv', file.loader);

        return new Promise((resolve, reject) => {

            const game = GameInstance.get();

            if (!file.skipCache && game.cache.csv.has(file.key))
            {
                resolve(file);
            }
            else
            {
                XHRLoader(file).then(file => {

                    if (!file.skipCache)
                    {
                        game.cache.csv.set(file.key, file.data);
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
