import { Cache } from '../../cache/Cache.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/buffers/DeleteGLBuffer.js';
import '../../renderer/webgl1/buffers/VertexBuffer.js';
import '../../gameobjects3d/geometry/GetBufferFromVertexSet.js';
import { Geometry } from '../../gameobjects3d/geometry/Geometry.js';
import { File } from '../File.js';
import { GetURL } from '../GetURL.js';
import { XHRLoader } from '../XHRLoader.js';

function JSONGeometryFile(key, url, mappingConfig) {
    const file = new File(key, url);
    const { vertices = 'verts', normals = 'normals', uvs = 'uvs', numberOfVertices = 0 } = mappingConfig;
    file.load = () => {
        file.url = GetURL(file.key, file.url, '.json', file.loader);
        return new Promise((resolve, reject) => {
            const cache = Cache.get('Geometry');
            if (!file.skipCache && cache.has(file.key)) {
                resolve(file);
            }
            else {
                XHRLoader(file).then(file => {
                    const data = JSON.parse(file.data);
                    const geom = new Geometry({
                        vertices: data[vertices],
                        normals: data[normals],
                        uvs: data[uvs],
                        numberOfVertices: numberOfVertices
                    });
                    file.data = geom;
                    if (!file.skipCache) {
                        cache.set(file.key, geom);
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

export { JSONGeometryFile };
