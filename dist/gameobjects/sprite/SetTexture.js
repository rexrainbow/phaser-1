import {SetFrame as SetFrame2} from "./SetFrame";
import {Texture as Texture2} from "../../textures/Texture";
import {TextureManagerInstance as TextureManagerInstance2} from "../../textures/TextureManagerInstance";
export function SetTexture(key, frame, ...children) {
  if (!key) {
    children.forEach((child) => {
      child.texture = null;
      child.frame = null;
      child.hasTexture = false;
    });
  } else {
    let texture;
    if (key instanceof Texture2) {
      texture = key;
    } else {
      texture = TextureManagerInstance2.get().get(key);
    }
    if (!texture) {
      console.warn(`Invalid Texture key: ${key}`);
    } else {
      children.forEach((child) => {
        child.texture = texture;
      });
      SetFrame2(texture, frame, ...children);
    }
  }
  return children;
}
