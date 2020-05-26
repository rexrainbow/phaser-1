import { IBaseWorld } from '../../world/IBaseWorld';
import { ITweenPlugin } from './ITweenPlugin';
import { Tween } from './Tween';
export declare class TweenPlugin implements ITweenPlugin {
    world: IBaseWorld;
    private tweens;
    private paused;
    timeScale: number;
    constructor(world: IBaseWorld);
    add(target: unknown, autoStart?: boolean): Tween;
    update(delta: number): void;
    killAllTweens(): void;
    killTweensOf(target: unknown): void;
    pauseAllTweens(): void;
    resumeAllTweens(): void;
    destroy(): void;
}
//# sourceMappingURL=TweenPlugin.d.ts.map