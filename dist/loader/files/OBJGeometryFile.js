import { Cache } from '../../cache/Cache.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/buffers/DeleteGLBuffer.js';
import '../../renderer/webgl1/buffers/VertexBuffer.js';
import '../../gameobjects3d/geometry/GetBufferFromVertexSet.js';
import { Geometry } from '../../gameobjects3d/geometry/Geometry.js';
import '../../gameobjects3d/geometry/ParseObj.js';
import { GetBufferFromObj } from '../../gameobjects3d/geometry/GetBufferFromObj.js';
import { File } from '../File.js';
import { GetURL } from '../GetURL.js';
import { XHRLoader } from '../XHRLoader.js';

function OBJGeometryFile(key, url, flipUVs = true) {
    const file = new File(key, url);
    file.load = () => {
        file.url = GetURL(file.key, file.url, '.obj', file.loader);
        return new Promise((resolve, reject) => {
            const cache = Cache.get('Geometry');
            if (!file.skipCache && cache.has(file.key)) {
                resolve(file);
            }
            else {
                XHRLoader(file).then(file => {
                    const models = GetBufferFromObj(file.data, flipUVs);
                    file.data = models;
                    if (!file.skipCache) {
                        let key = file.key;
                        models.forEach((model, index) => {
                            if (index > 0) {
                                key = file.key + index.toString();
                            }
                            const geom = new Geometry(model.buffer);
                            cache.set(key, geom);
                        });
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

export { OBJGeometryFile };
