import {BitmapTextParser as BitmapTextParser2} from "../../textures/parsers/BitmapTextParser";
import {File as File2} from "../File";
import {GetURL as GetURL2} from "../GetURL";
import {ImageFile as ImageFile2} from "./ImageFile";
import {TextureManagerInstance as TextureManagerInstance2} from "../../textures/TextureManagerInstance";
import {XMLFile as XMLFile2} from "./XMLFile";
export function BitmapTextFile(key, textureURL, fontDataURL, glConfig) {
  const xml = XMLFile2(key, fontDataURL);
  const image = ImageFile2(key, textureURL, glConfig);
  const file = new File2(key, "");
  file.load = () => {
    xml.url = GetURL2(xml.key, xml.url, ".xml", file.loader);
    image.url = GetURL2(image.key, image.url, ".png", file.loader);
    return new Promise((resolve, reject) => {
      xml.skipCache = true;
      xml.load().then(() => {
        image.load().then(() => {
          const texture = TextureManagerInstance2.get().get(key);
          const fontData = BitmapTextParser2(texture, xml.data);
          texture.data = fontData;
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
