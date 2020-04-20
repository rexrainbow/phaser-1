import { IAnimatedSprite } from './IAnimatedSprite';

export function ClearAnimations (...sprite: IAnimatedSprite[])
{
    sprite.forEach(entity => {

        entity.anims.clear();

    });
}
