import Frame from '../../textures/Frame';
import IRenderable from '../sprite/IRenderable';
import IAnimationData from './IAnimationData';

export default interface IAnimatedSprite extends IRenderable
{
    anims: Map<string, Frame[]>;
    animData: IAnimationData;
    nextFrame (): this;
    prevFrame (): this;
    isPlaying: boolean;
    isPlayingForward: boolean;
    currentAnimation: string;
}
