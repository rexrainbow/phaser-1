import { IAnimatedSprite } from './IAnimatedSprite';

export function RemoveAnimation (key: string, ...sprite: IAnimatedSprite[]): void
{
    sprite.forEach(entity =>
    {
        entity.anims.delete(key);
    });
}
