import { IAnimatedSprite } from './IAnimatedSprite';
export declare type AtlasFrameConfig = {
    key: string;
    prefix?: string;
    start?: number;
    end: number;
    zeroPad?: number;
    suffix?: string;
};
export declare function AddAnimationFromAtlas<T extends IAnimatedSprite>(config: AtlasFrameConfig, ...sprites: T[]): T[];
//# sourceMappingURL=AddAnimationFromAtlas.d.ts.map