import {Cache as Cache2} from "../../cache/Cache";
import {File as File2} from "../File";
import {GetURL as GetURL2} from "../GetURL";
import {ParseXML as ParseXML2} from "../../dom/ParseXML";
import {XHRLoader as XHRLoader2} from "../XHRLoader";
export function XMLFile(key, url) {
  const file = new File2(key, url);
  file.load = () => {
    file.url = GetURL2(file.key, file.url, ".xml", file.loader);
    return new Promise((resolve, reject) => {
      const cache = Cache2.get("XML");
      if (!file.skipCache && cache.has(file.key)) {
        resolve(file);
      } else {
        XHRLoader2(file).then((file2) => {
          const xml = ParseXML2(file2.data);
          if (xml !== null) {
            file2.data = xml;
            if (!file2.skipCache) {
              cache.set(file2.key, xml);
            }
            resolve(file2);
          } else {
            reject(file2);
          }
        }).catch((file2) => {
          reject(file2);
        });
      }
    });
  };
  return file;
}
