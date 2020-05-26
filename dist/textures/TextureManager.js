import '../renderer/BindingQueue.js';
import './Frame.js';
import { Texture } from './Texture.js';
import { CreateCanvas } from './CreateCanvas.js';
import { TextureManagerInstance } from './TextureManagerInstance.js';

class TextureManager {
    constructor() {
        this.textures = new Map();
        this.createDefaultTextures();
        TextureManagerInstance.set(this);
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
        const textures = this.textures;
        if (textures.has(key)) {
            return textures.get(key);
        }
        else {
            return textures.get('__MISSING');
        }
    }
    has(key) {
        return this.textures.has(key);
    }
    add(key, source) {
        let texture;
        const textures = this.textures;
        if (!textures.has(key)) {
            if (source instanceof Texture) {
                texture = source;
            }
            else {
                texture = new Texture(source);
            }
            texture.key = key;
            textures.set(key, texture);
        }
        return texture;
    }
}

export { TextureManager };
