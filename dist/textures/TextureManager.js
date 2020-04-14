import Texture from './Texture';
import CreateCanvas from './CreateCanvas';
export default class TextureManager {
    constructor() {
        this.textures = new Map();
        this.createDefaultTextures();
    }
    createDefaultTextures() {
        this.add('__BLANK', new Texture(CreateCanvas(32, 32).canvas));
        const missing = CreateCanvas(32, 32);
        missing.strokeStyle = '#0f0';
        missing.moveTo(0, 0);
        missing.lineTo(32, 32);
        missing.stroke();
        missing.strokeRect(0.5, 0.5, 31, 31);
        this.add('__MISSING', new Texture(missing.canvas));
    }
    get(key) {
        if (this.textures.has(key)) {
            return this.textures.get(key);
        }
        else {
            return this.textures.get('__MISSING');
        }
    }
    has(key) {
        return this.textures.has(key);
    }
    add(key, source) {
        let texture;
        if (!this.textures.has(key)) {
            if (source instanceof Texture) {
                texture = source;
            }
            else {
                texture = new Texture(source);
            }
            texture.key = key;
            if (!texture.glTexture) {
                texture.createGL();
            }
            this.textures.set(key, texture);
        }
        return texture;
    }
}
//# sourceMappingURL=TextureManager.js.map