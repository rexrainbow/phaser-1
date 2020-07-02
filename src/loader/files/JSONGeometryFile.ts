import { Cache } from '../../cache/Cache';
import { File } from '../File';
import { Geometry } from '../../gameobjects3d/geometry/Geometry';
import { GetURL } from '../GetURL';
import { XHRLoader } from '../XHRLoader';

export type JSONGeometryMappingConfig = {
    vertices?: string;
    normals?: string;
    uvs?: string;
    numberOfVertices?: number;
};

export function JSONGeometryFile (key: string, url?: string, mappingConfig?: JSONGeometryMappingConfig): File
{
    const file = new File(key, url);

    const {
        vertices = 'verts',
        normals = 'normals',
        uvs = 'uvs',
        numberOfVertices = 0
    } = mappingConfig;

    file.load = (): Promise<File> =>
    {
        file.url = GetURL(file.key, file.url, '.json', file.loader);

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
                    const data = JSON.parse(file.data);

                    const geom = new Geometry({
                        vertices: data[vertices],
                        normals: data[normals],
                        uvs: data[uvs],
                        numberOfVertices: numberOfVertices
                    });

                    file.data = geom;

                    if (!file.skipCache)
                    {
                        cache.set(file.key, geom);
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
