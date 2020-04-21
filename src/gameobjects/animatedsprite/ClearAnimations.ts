import { IAnimatedSprite } from './IAnimatedSprite';

export function ClearAnimations (...sprite: IAnimatedSprite[]): void
{
    sprite.forEach(entity =>
    {
        entity.anims.clear();
    });
}
