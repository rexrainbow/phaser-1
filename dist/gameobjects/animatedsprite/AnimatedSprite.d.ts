import Sprite from '../sprite/Sprite';
import { Scene } from '../..';
import IAnimationData from '../IAnimationData';
import IAnimationPlayConfig from './IAnimationPlayConfig';
import Frame from '../../textures/Frame';
import IContainer from './IContainer';
export default class AnimatedSprite extends Sprite {
    anims: Map<string, Frame[]>;
    animData: IAnimationData;
    constructor(scene: Scene, x: number, y: number, texture: string, frame?: string | number);
    addAnimation(key: string, frames: string[] | number[]): this;
    addAnimationFromAtlas(key: string, prefix: string, start: number, end: number, zeroPad?: number, suffix?: string): this;
    removeAnimation(key: string): this;
    clearAnimations(): this;
    play(key: string, config?: IAnimationPlayConfig): this;
    stop(): this;
    nextFrame(): this;
    prevFrame(): this;
    update(delta: number, now: number): void;
    get isPlaying(): boolean;
    get isPlayingForward(): boolean;
    get currentAnimation(): string;
    destroy(reparentChildren?: IContainer): void;
}
//# sourceMappingURL=AnimatedSprite.d.ts.map