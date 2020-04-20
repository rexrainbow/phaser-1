import { IAnimatedSprite } from './IAnimatedSprite';

export function Stop (...sprite: IAnimatedSprite[])
{
    sprite.forEach(entity => {

        const data = entity.animData;

        data.isPlaying = false;
        data.currentAnim = '';
    
        if (data.onComplete)
        {
            data.onComplete(entity, data.currentAnim);
        }
    
    });
}
