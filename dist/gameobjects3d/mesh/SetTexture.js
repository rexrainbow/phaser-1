import '../../renderer/BindingQueue.js';
import '../../textures/Frame.js';
import { Texture } from '../../textures/Texture.js';
import { TextureManagerInstance } from '../../textures/TextureManagerInstance.js';
import { SetFrame } from './SetFrame.js';

function SetTexture(key, frame, ...children) {
    if (!key) {
        children.forEach(child => {
            child.texture = null;
            child.frame = null;
            child.hasTexture = false;
        });
    }
    else {
        let texture;
        if (key instanceof Texture) {
            texture = key;
        }
        else {
            texture = TextureManagerInstance.get().get(key);
        }
        if (!texture) {
            console.warn(`Invalid Texture key: ${key}`);
        }
        else {
            children.forEach(child => {
                child.texture = texture;
            });
            SetFrame(texture, frame, ...children);
        }
    }
    return children;
}

export { SetTexture };
