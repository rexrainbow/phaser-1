import IAnimatedSprite from './IAnimatedSprite';

export default function RemoveAnimation (key: string, ...sprite: IAnimatedSprite[])
{
    sprite.forEach(entity => {

        entity.anims.delete(key);

    });
}
