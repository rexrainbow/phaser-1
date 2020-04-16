import Texture from '../../textures/Texture';
import GameInstance from '../../GameInstance';
import SetFrame from './SetFrame';
export default function SetTexture(key, frame, ...sprite) {
    sprite.forEach(entity => {
        if (!key) {
            return;
        }
        if (key instanceof Texture) {
            entity.texture = key;
        }
        else {
            entity.texture = GameInstance.get().textures.get(key);
        }
        if (!entity.texture) {
            console.warn('Invalid Texture key: ' + key);
        }
        else {
            if (!entity.texture.glTexture) {
                entity.texture.createGL();
            }
            SetFrame(frame, entity);
        }
    });
}
//# sourceMappingURL=SetTexture.js.map