import { Linear } from '../../math/easing/Linear';
import { TweenProperty } from './TweenProperty';

export class Tween
{
    target: {};
    progress: number = 0;
    isRunning: boolean;

    private isDead: boolean = false;
    private reversed: boolean;
    private overwrite: boolean;
    private autoStart: boolean;
    private _delay: number = 0;
    private duration: number = 0;
    private elapsed: number = 0;
    private _delayElapsed: number = 0;
    private _durationElapsed: number = 0;
    private ease: Function;
    private properties: TweenProperty[] = [];
    private autoVisible: boolean;
    private _yoyo: boolean;

    constructor (target: {}, autoStart: boolean = true)
    {
        this.target = target;
        this.autoStart = autoStart;
        this.ease = Linear;
        this.isRunning = false;
    }

    to (duration: number, toState: Record<string, number> = null, overwrite: boolean = true): this
    {
        return this.add(duration, toState, overwrite);
    }

    from (duration: number, fromState: Record<string, number> = null, overwrite: boolean = true): this
    {
        return this.add(duration, fromState, overwrite, true);
    }

    private add (duration: number, state: Record<string, number>, overwrite: boolean, reversed: boolean = false): this
    {
        const properties = this.properties;

        for (const name in state)
        {
            const value = state[name];

            properties.push(new TweenProperty(name, value));
        }

        this.duration = duration * 1000;
        this.reversed = reversed;
        this.overwrite = overwrite;

        if (this.autoStart)
        {
            this.start();
        }

        return this;
    }

    start (): void
    {
        if (this.isRunning)
        {
            return;
        }

        const properties = this.properties;
        const target = this.target;

        properties.forEach(property =>
        {
            // property.init(target, this.reversed);
        });

        this._delayElapsed = this._delay;
        this._durationElapsed = this.duration;

        this.elapsed = 0;
        this.isRunning = true;

        this.update(0);
    }

    //  If it returns true it means this Tween has been disposed
    update (delta: number): boolean
    {
        if (!this.isRunning)
        {
            return false;
        }

        if (this._delayElapsed > 0)
        {
            this._delayElapsed -= delta;

            if (this._delayElapsed <= 0)
            {
                //  Carry over the difference to the duration
                this.elapsed = Math.abs(this._delayElapsed);
                this._delayElapsed = 0;
            }
        }
        else
        {
            this.elapsed += delta;
            this.progress = Math.min(this.elapsed / this.duration, 1);

            // const v = (this.reversed) ? this.ease(1 - this.progress) : this.ease(this.progress);
            const v = this.ease(this.progress);

            const properties = this.properties;

            properties.forEach(property =>
            {
                property.update(this.target, v);
            });

            if (this.progress === 1)
            {
                if (this._yoyo)
                {
                    properties.forEach(property =>
                    {
                        // property.reverse();
                    });

                    this.elapsed = 0;
                    this._yoyo = false;
                    this.reversed = true;
                }
                else
                {
                    this.dispose();

                    return true;
                }
            }
        }

        return false;
    }

    delay (duration: number): this
    {
        this._delay = duration * 1000;

        return this;
    }

    yoyo (value: boolean = true): this
    {
        this._yoyo = value;

        return this;
    }

    easing (f: Function): this
    {
        this.ease = f;

        return this;
    }

    dispose (): void
    {
        this.isDead = true;
        this.target = null;
        this.properties = null;
        this.ease = null;
        this.isRunning = false;
    }
}
