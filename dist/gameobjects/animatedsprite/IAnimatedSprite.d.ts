import ISprite from '../sprite/ISprite';
import IAnimationData from './IAnimationData';
import Frame from '../../textures/Frame';
export default interface IAnimatedSprite extends ISprite {
    anims: Map<string, Frame[]>;
    animData: IAnimationData;
    nextFrame(): this;
    prevFrame(): this;
    isPlaying: boolean;
    isPlayingForward: boolean;
    currentAnimation: string;
}
//# sourceMappingURL=IAnimatedSprite.d.ts.map