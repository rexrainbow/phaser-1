import IAnimationPlayConfig from './IAnimationPlayConfig';
import IAnimatedSprite from './IAnimatedSprite';

export default function Play (key: string, config: IAnimationPlayConfig = {}, ...sprite: IAnimatedSprite[])
{
    const {
        speed = 24,
        repeat = 0,
        yoyo = false,
        startFrame = 0,
        delay = 0,
        repeatDelay = 0,
        onStart = null,
        onRepeat = null,
        onComplete = null,
        forceRestart = false
    } = config;

    sprite.forEach(entity => {

        const data = entity.animData;

        if (data.isPlaying)
        {
            if (data.currentAnim !== key)
            {
                //  Stop
                data.isPlaying = false;
                data.currentAnim = '';
            
                if (data.onComplete)
                {
                    data.onComplete(entity, data.currentAnim);
                }
            }
            else if (!forceRestart)
            {
                //  This animation is already playing? Just return then.
                return;
            }
        }
    
        if (entity.anims.has(key))
        {
            data.currentFrames = entity.anims.get(key);
            data.currentAnim = key;
            data.frameIndex = startFrame;
            data.animSpeed = 1000 / speed;
            data.nextFrameTime = data.animSpeed + delay;
            data.isPlaying = true;
            data.playingForward = true;
            data.yoyo = yoyo;
            data.repeatCount = repeat;
            data.delay = delay;
            data.repeatDelay = repeatDelay;
            data.onStart = onStart;
            data.onRepeat = onRepeat;
            data.onComplete = onComplete;
    
            //  If there is no start delay, we set the first frame immediately
            if (delay === 0)
            {
                entity.setFrame(data.currentFrames[data.frameIndex]);
    
                if (onStart)
                {
                    onStart(entity, key);
                }
            }
            else
            {
                data.pendingStart = true;
            }
        }

    });
}
