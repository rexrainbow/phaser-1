import { GetFramesInRange } from '../../textures/GetFramesInRange.js';

function AddAnimationFromAtlas(config, ...sprites) {
    const key = config.key;
    sprites.forEach(sprite => {
        if (!sprite.anims.has(key)) {
            sprite.anims.set(key, GetFramesInRange(sprite.texture, config));
        }
    });
    return sprites;
}

export { AddAnimationFromAtlas };
