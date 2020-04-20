import { IAnimatedSprite } from './IAnimatedSprite';

export type AtlasFrameConfig = {
    key: string,
    prefix?: string,
    start?: number,
    end: number,
    zeroPad?: number,
    suffix?: string
};

export function AddAnimationFromAtlas (config: AtlasFrameConfig, ...sprite: IAnimatedSprite[])
{
    const {
        key,
        prefix = '',
        start = 0,
        end,
        zeroPad = 0,
        suffix = ''
    } = config;

    sprite.forEach(entity => {

        if (!entity.anims.has(key))
        {
            entity.anims.set(key, entity.texture.getFramesInRange(prefix, start, end, zeroPad, suffix));
        }

    });
}
