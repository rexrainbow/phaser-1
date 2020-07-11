import { Tween } from './Tween';
export interface ITweenPlugin {
    timeScale: number;
    add(target: {}, autoStart?: boolean): Tween;
    killAllTweens(): void;
    killTweensOf(target: {}): void;
    pauseAllTweens(): void;
    resumeAllTweens(): void;
}
//# sourceMappingURL=ITweenPlugin.d.ts.map