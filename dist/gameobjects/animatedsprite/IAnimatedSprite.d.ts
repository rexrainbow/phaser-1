import ISprite from '../sprite/ISprite';
import IAnimationData from '../IAnimationData';
import IAnimationPlayConfig from './IAnimationPlayConfig';
import Frame from '../../textures/Frame';
export default interface IAnimatedSprite extends ISprite {
    anims: Map<string, Frame[]>;
    animData: IAnimationData;
    addAnimation(key: string, frames: string[] | number[]): this;
    addAnimationFromAtlas(key: string, prefix: string, start: number, end: number, zeroPad?: number, suffix?: string): this;
    removeAnimation(key: string): this;
    clearAnimations(): this;
    play(key: string, config?: IAnimationPlayConfig): this;
    stop(): this;
    nextFrame(): this;
    prevFrame(): this;
    update(delta?: number, now?: number): void;
    isPlaying: boolean;
    isPlayingForward: boolean;
    currentAnimation: string;
}
//# sourceMappingURL=IAnimatedSprite.d.ts.map