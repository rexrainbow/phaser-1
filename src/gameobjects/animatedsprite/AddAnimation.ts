import IAnimatedSprite from './IAnimatedSprite';

export default function AddAnimation (key: string, frames: string[] | number[], ...sprite: IAnimatedSprite[])
{
    sprite.forEach(entity => {

        if (!entity.anims.has(key))
        {
            entity.anims.set(key, entity.texture.getFrames(frames));
        }

    });
}
