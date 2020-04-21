import { IAnimatedSprite } from './IAnimatedSprite';

export function AddAnimation (key: string, frames: string[] | number[], ...sprite: IAnimatedSprite[]): void
{
    sprite.forEach(entity =>
    {
        if (!entity.anims.has(key))
        {
            entity.anims.set(key, entity.texture.getFrames(frames));
        }
    });
}
