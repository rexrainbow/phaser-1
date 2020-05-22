import { Off, On } from '../../../events';

import { GameInstance } from '../../../GameInstance';
import { IEventEmitter } from '../../../events/IEventEmitter';
import { IEventInstance } from '../../../events/IEventInstance';
import { Linear } from '../../../math/easing/Linear';
import { TweenProperty } from '../TweenProperty';
import { UpdateEvent } from '../../../gameobjects/events';

export class NanoTweenHandler
{
    target: {};

    progress: number = 0;
    elapsed: number = 0;

    isRunning: boolean = false;

    //  The duration in ms
    private duration: number;

    private reversed: boolean;

    private autoStart: boolean;

    private ease: Function = Linear;

    private properties: TweenProperty[] = [];

    private _delay: number = 0;
    private _delayElapsed: number = 0;
    private _durationElapsed: number = 0;
    private _yoyo: boolean;
    private _listener: IEventInstance;
    private _emitter: IEventEmitter;

    constructor (target: {}, emitter: IEventEmitter, autoStart: boolean = true)
    {
        if (!emitter)
        {
            emitter = GameInstance.get();
        }

        this.target = target;
        this.autoStart = autoStart;

        this._emitter = emitter;
    }

    to (duration: number, properties: Record<string, number> = null): this
    {
        return this.add(duration, properties);
    }

    from (duration: number, properties: Record<string, number> = null): this
    {
        return this.add(duration, properties, true);
    }

    private add (duration: number, state: Record<string, number>, reversed: boolean = false): this
    {
        if (this.isRunning)
        {
            return this;
        }

        const target = this.target;
        const properties = this.properties;
        const autoStart = this.autoStart;

        for (const name in state)
        {
            const property = new TweenProperty(name, state[ name ]);

            if (autoStart)
            {
                property.init(target, reversed);
            }

            properties.push(property);
        }

        this.duration = duration * 1000;
        this.reversed = reversed;

        if (autoStart)
        {
            this.start(false);
        }

        return this;
    }

    start (initProperties: boolean = true): this
    {
        if (this.isRunning)
        {
            return this;
        }

        this._listener = On(this._emitter, UpdateEvent, (delta: number) => this.update(delta));

        if (initProperties)
        {
            const target = this.target;
            const properties = this.properties;

            properties.forEach(property =>
            {
                property.init(target, this.reversed);
            });
        }

        this.isRunning = true;

        this.update(0);

        return this;
    }

    //  If it returns true it means this Tween has completed
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
                    // properties.forEach(property =>
                    // {
                    //     property.reverse();
                    // });

                    // this.elapsed = 0;
                    // this._yoyo = false;
                    // this.reversed = true;
                }
                else
                {
                    this.destroy();

                    return true;
                }
            }
        }

        return false;
    }

    delay (duration: number): this
    {
        this._delay = duration * 1000;
        this._delayElapsed = this._delay;

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

    destroy (): void
    {
        Off(this._emitter, UpdateEvent, this._listener);

        this.target = null;
        this.properties.length = 0;
        this.ease = null;
        this._emitter = null;
        this.isRunning = false;
    }
}
