export declare class Tween {
    target: {};
    progress: number;
    isRunning: boolean;
    private isDead;
    private reversed;
    private overwrite;
    private autoStart;
    private _delay;
    private duration;
    private elapsed;
    private _delayElapsed;
    private _durationElapsed;
    private ease;
    private properties;
    private autoVisible;
    private _yoyo;
    constructor(target: {}, autoStart?: boolean);
    to(duration: number, toState?: Record<string, number>, overwrite?: boolean): this;
    from(duration: number, fromState?: Record<string, number>, overwrite?: boolean): this;
    private add;
    start(): void;
    update(delta: number): boolean;
    delay(duration: number): this;
    yoyo(value?: boolean): this;
    easing(f: Function): this;
    dispose(): void;
}
//# sourceMappingURL=Tween.d.ts.map