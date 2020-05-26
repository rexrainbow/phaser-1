import { IEventEmitter } from '../../../events/IEventEmitter';
import { IEventInstance } from '../../../events/IEventInstance';
declare type TweenState = {
    running: boolean;
    repeat: boolean;
    hold: boolean;
    delay: boolean;
    yoyo: boolean;
    yoyoing: boolean;
    autoStart: boolean;
    reversed: boolean;
};
declare type TweenInit = {
    duration: number;
    repeat: number;
    repeatDelay: number;
    hold: number;
    delay: number;
};
declare type TweenCounters = {
    repeat: number;
    delay: number;
    progress: number;
    elapsed: number;
};
declare type EaseFunction = (v: number) => number;
export declare class NanoTween {
    target: unknown;
    state: TweenState;
    init: TweenInit;
    counters: TweenCounters;
    ease: EaseFunction;
    listener: IEventInstance;
    emitter: IEventEmitter;
    private properties;
    constructor(target: unknown, emitter: IEventEmitter, autoStart?: boolean);
    to(duration: number, properties?: Record<string, number | string>): this;
    from(duration: number, properties?: Record<string, number | string>): this;
    private add;
    start(): this;
    restart(): this;
    update(delta: number): boolean;
    delay(duration: number): this;
    hold(duration: number): this;
    yoyo(value?: boolean): this;
    repeat(repeatCount?: number, delay?: number): this;
    easing(f: EaseFunction): this;
    destroy(): void;
}
export {};
//# sourceMappingURL=NanoTween.d.ts.map