import { Frame } from '../../textures/Frame';
import { ISprite } from './ISprite';
import { SetFrame } from './SetFrame';
import { Texture } from '../../textures/Texture';
import { TextureManagerInstance } from '../../textures/TextureManagerInstance';

export function SetTexture (key: string | Texture, frame: string | number | Frame, ...sprite: ISprite[]): void
{
    if (!key)
    {
        return;
    }

    let texture: Texture;

    if (key instanceof Texture)
    {
        texture = key;
    }
    else
    {
        texture = TextureManagerInstance.get().get(key);
    }

    if (!texture)
    {
        console.warn('Invalid Texture key: ' + key);

        return;
    }
    else
    {
        //  TODO - Move this to the render process
        if (!texture.glTexture)
        {
            texture.createGL();
        }

        sprite.forEach(entity =>
        {
            entity.texture = texture;

            SetFrame(texture, frame, entity);
        });
    }
}
