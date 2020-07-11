import {Cache as Cache2} from "../../cache/Cache";
import {File as File2} from "../File";
import {GetURL as GetURL2} from "../GetURL";
import {XHRLoader as XHRLoader2} from "../XHRLoader";
export function JSONFile(key, url) {
  const file = new File2(key, url);
  file.load = () => {
    file.url = GetURL2(file.key, file.url, ".json", file.loader);
    return new Promise((resolve, reject) => {
      const cache = Cache2.get("JSON");
      if (!file.skipCache && cache.has(file.key)) {
        resolve(file);
      } else {
        XHRLoader2(file).then((file2) => {
          file2.data = JSON.parse(file2.data);
          if (!file2.skipCache) {
            cache.set(file2.key, file2.data);
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
