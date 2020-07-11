import {Cache as Cache2} from "../../cache/Cache";
import {File as File2} from "../File";
import {Geometry as Geometry2} from "../../gameobjects3d/geometry/Geometry";
import {GetURL as GetURL2} from "../GetURL";
import {XHRLoader as XHRLoader2} from "../XHRLoader";
export function JSONGeometryFile(key, url, mappingConfig) {
  const file = new File2(key, url);
  const {
    vertices = "verts",
    normals = "normals",
    uvs = "uvs",
    numberOfVertices = 0
  } = mappingConfig;
  file.load = () => {
    file.url = GetURL2(file.key, file.url, ".json", file.loader);
    return new Promise((resolve, reject) => {
      const cache = Cache2.get("Geometry");
      if (!file.skipCache && cache.has(file.key)) {
        resolve(file);
      } else {
        XHRLoader2(file).then((file2) => {
          const data = JSON.parse(file2.data);
          const geom = new Geometry2({
            vertices: data[vertices],
            normals: data[normals],
            uvs: data[uvs],
            numberOfVertices
          });
          file2.data = geom;
          if (!file2.skipCache) {
            cache.set(file2.key, geom);
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
