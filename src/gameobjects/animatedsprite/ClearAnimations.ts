import IAnimatedSprite from './IAnimatedSprite';

export default function ClearAnimations (...sprite: IAnimatedSprite[])
{
    sprite.forEach(entity => {

        entity.anims.clear();

    });
}
