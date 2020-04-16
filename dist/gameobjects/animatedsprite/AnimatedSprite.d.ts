import Sprite from '../sprite/Sprite';
import IAnimationData from './IAnimationData';
import Frame from '../../textures/Frame';
import IContainer from '../container/IContainer';
export default class AnimatedSprite extends Sprite {
    anims: Map<string, Frame[]>;
    animData: IAnimationData;
    constructor(x: number, y: number, texture: string, frame?: string | number);
    private stop;
    nextFrame(): this;
    prevFrame(): this;
    update(delta: number, now: number): void;
    get isPlaying(): boolean;
    get isPlayingForward(): boolean;
    get currentAnimation(): string;
    destroy(reparentChildren?: IContainer): void;
}
//# sourceMappingURL=AnimatedSprite.d.ts.map