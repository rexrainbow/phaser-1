import {Cache as Cache2} from "../../cache/Cache";
import {File as File2} from "../File";
import {GetURL as GetURL2} from "../GetURL";
import {XHRLoader as XHRLoader2} from "../XHRLoader";
export function CSVFile(key, url) {
  const file = new File2(key, url);
  file.load = () => {
    file.url = GetURL2(file.key, file.url, ".csv", file.loader);
    return new Promise((resolve, reject) => {
      const cache = Cache2.get("CSV");
      if (!file.skipCache && cache.has(file.key)) {
        resolve(file);
      } else {
        XHRLoader2(file).then((file2) => {
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
