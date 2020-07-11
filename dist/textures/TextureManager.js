import {CreateCanvas as CreateCanvas2} from "./CreateCanvas";
import {Texture as Texture2} from "./Texture";
import {TextureManagerInstance as TextureManagerInstance2} from "./TextureManagerInstance";
export class TextureManager {
  constructor() {
    this.textures = new Map();
    this.createDefaultTextures();
    TextureManagerInstance2.set(this);
  }
  createDefaultTextures() {
    this.add("__BLANK", new Texture2(CreateCanvas2(32, 32).canvas));
    const missing = CreateCanvas2(32, 32);
    missing.strokeStyle = "#0f0";
    missing.moveTo(0, 0);
    missing.lineTo(32, 32);
    missing.stroke();
    missing.strokeRect(0.5, 0.5, 31, 31);
    this.add("__MISSING", new Texture2(missing.canvas));
    const white = CreateCanvas2(32, 32);
    white.fillStyle = "#fff";
    white.fillRect(0, 0, 32, 32);
    this.add("__WHITE", new Texture2(white.canvas));
  }
  get(key) {
    const textures = this.textures;
    if (textures.has(key)) {
      return textures.get(key);
    } else {
      return textures.get("__MISSING");
    }
  }
  has(key) {
    return this.textures.has(key);
  }
  add(key, source, glConfig) {
    let texture;
    const textures = this.textures;
    if (!textures.has(key)) {
      if (source instanceof Texture2) {
        texture = source;
      } else {
        texture = new Texture2(source, 0, 0, glConfig);
      }
      texture.key = key;
      textures.set(key, texture);
    }
    return texture;
  }
}
