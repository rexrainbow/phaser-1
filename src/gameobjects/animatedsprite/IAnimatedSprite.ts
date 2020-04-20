import Frame from '../../textures/Frame';
import ISprite from '../sprite/ISprite';
import IAnimationData from './IAnimationData';

export default interface IAnimatedSprite extends ISprite
{
    anims: Map<string, Frame[]>;
    animData: IAnimationData;
    nextFrame (): this;
    prevFrame (): this;
    isPlaying: boolean;
    isPlayingForward: boolean;
    currentAnimation: string;
}
