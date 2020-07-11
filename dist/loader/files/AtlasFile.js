import {AtlasParser as AtlasParser2} from "../../textures/parsers/AtlasParser";
import {File as File2} from "../File";
import {GetURL as GetURL2} from "../GetURL";
import {ImageFile as ImageFile2} from "./ImageFile";
import {JSONFile as JSONFile2} from "./JSONFile";
import {TextureManagerInstance as TextureManagerInstance2} from "../../textures/TextureManagerInstance";
export function AtlasFile(key, textureURL, atlasURL, glConfig) {
  const json = JSONFile2(key, atlasURL);
  const image = ImageFile2(key, textureURL, glConfig);
  const file = new File2(key, "");
  file.load = () => {
    json.url = GetURL2(json.key, json.url, ".json", file.loader);
    image.url = GetURL2(image.key, image.url, ".png", file.loader);
    return new Promise((resolve, reject) => {
      json.skipCache = true;
      json.load().then(() => {
        image.load().then(() => {
          AtlasParser2(TextureManagerInstance2.get().get(key), json.data);
          resolve(file);
        }).catch(() => {
          reject(file);
        });
      }).catch(() => {
        reject(file);
      });
    });
  };
  return file;
}
