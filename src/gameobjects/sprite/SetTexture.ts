import { Frame } from '../../textures/Frame';
import { ISprite } from './ISprite';
import { SetFrame } from './SetFrame';
import { Texture } from '../../textures/Texture';
import { TextureManagerInstance } from '../../textures/TextureManagerInstance';

export function SetTexture (key: string | Texture, frame: string | number | Frame, ...sprite: ISprite[]): void
{
    sprite.forEach(entity =>
    {
        if (!key)
        {
            return;
        }

        if (key instanceof Texture)
        {
            entity.texture = key;
        }
        else
        {
            entity.texture = TextureManagerInstance.get().get(key);
        }

        if (!entity.texture)
        {
            console.warn('Invalid Texture key: ' + key);
        }
        else
        {
            if (!entity.texture.glTexture)
            {
                entity.texture.createGL();
            }

            SetFrame(frame, entity);
        }
    });
}
