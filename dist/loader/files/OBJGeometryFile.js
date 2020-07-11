import {Cache as Cache2} from "../../cache/Cache";
import {File as File2} from "../File";
import {Geometry as Geometry2} from "../../gameobjects3d/geometry/Geometry";
import {GetBufferFromObj as GetBufferFromObj2} from "../../gameobjects3d/geometry/GetBufferFromObj";
import {GetURL as GetURL2} from "../GetURL";
import {XHRLoader as XHRLoader2} from "../XHRLoader";
export function OBJGeometryFile(key, url, flipUVs = true) {
  const file = new File2(key, url);
  file.load = () => {
    file.url = GetURL2(file.key, file.url, ".obj", file.loader);
    return new Promise((resolve, reject) => {
      const cache = Cache2.get("Geometry");
      if (!file.skipCache && cache.has(file.key)) {
        resolve(file);
      } else {
        XHRLoader2(file).then((file2) => {
          const models = GetBufferFromObj2(file2.data, flipUVs);
          file2.data = models;
          if (!file2.skipCache) {
            let key2 = file2.key;
            models.forEach((model, index) => {
              if (index > 0) {
                key2 = file2.key + index.toString();
              }
              const geom = new Geometry2(model.buffer);
              cache.set(key2, geom);
            });
          }
          resolve(file2);
        }).catch((file2) => {
          reject(file2);
        });
      }
    });
  };
  return file;
}
