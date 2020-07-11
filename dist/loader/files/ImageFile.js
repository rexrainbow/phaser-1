import {File as File2} from "../File";
import {GetURL as GetURL2} from "../GetURL";
import {ImageTagLoader as ImageTagLoader2} from "../ImageTagLoader";
import {TextureManagerInstance as TextureManagerInstance2} from "../../textures/TextureManagerInstance";
export function ImageFile(key, url, glConfig) {
  const file = new File2(key, url);
  file.load = () => {
    file.url = GetURL2(file.key, file.url, ".png", file.loader);
    if (file.loader) {
      file.crossOrigin = file.loader.crossOrigin;
    }
    return new Promise((resolve, reject) => {
      const textureManager = TextureManagerInstance2.get();
      if (textureManager.has(file.key)) {
        resolve(file);
      } else {
        ImageTagLoader2(file).then((file2) => {
          textureManager.add(file2.key, file2.data, glConfig);
          resolve(file2);
        }).catch((file2) => {
          reject(file2);
        });
      }
    });
  };
  return file;
}
