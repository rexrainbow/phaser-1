import { File } from '../File';
import { XHRLoader } from '../XHRLoader';
import { GetURL } from '../GetURL';
import { ParseXML } from '../../dom/ParseXML';
import { GameInstance } from '../../GameInstance';

export function XMLFile (key: string, url?: string): File
{
    const file = new File(key, url);

    file.load = () => {

        file.url = GetURL(file.key, file.url, '.xml', file.loader);

        return new Promise((resolve, reject) => {

            const game = GameInstance.get();

            if (!file.skipCache && game.cache.xml.has(file.key))
            {
                resolve(file);
            }
            else
            {
                XHRLoader(file).then(file => {

                    const xml = ParseXML(file.data);

                    if (xml !== null)
                    {
                        file.data = xml;

                        if (!file.skipCache)
                        {
                            game.cache.xml.set(file.key, xml);
                        }

                        resolve(file);
                    }
                    else
                    {
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
