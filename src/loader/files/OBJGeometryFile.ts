import { Cache } from '../../cache/Cache';
import { File } from '../File';
import { Geometry } from '../../gameobjects3d/geometry/Geometry';
import { GetBufferFromObj } from '../../gameobjects3d/geometry/GetBufferFromObj';
import { GetURL } from '../GetURL';
import { XHRLoader } from '../XHRLoader';

export function OBJGeometryFile (key: string, url?: string, flipUVs: boolean = true): File
{
    const file = new File(key, url);

    file.load = (): Promise<File> =>
    {
        file.url = GetURL(file.key, file.url, '.obj', file.loader);

        return new Promise((resolve, reject) =>
        {
            const cache = Cache.get('Geometry');

            if (!file.skipCache && cache.has(file.key))
            {
                resolve(file);
            }
            else
            {
                XHRLoader(file).then(file =>
                {
                    const models = GetBufferFromObj(file.data, flipUVs);

                    file.data = models;

                    if (!file.skipCache)
                    {
                        let key = file.key;

                        models.forEach((model, index) =>
                        {
                            if (index > 0)
                            {
                                key = file.key + index.toString();
                            }

                            const geom = new Geometry(model.buffer);

                            cache.set(key, geom);

                        });
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
