import { NOOP } from '../../utils/NOOP';
import { Vec2 } from './Vec2';

export type Vec2CallbackType = (vec2: Vec2Callback) => void;

export class Vec2Callback extends Vec2
{
    private _x: number;
    private _y: number;

    onChange: Vec2CallbackType;

    constructor (onChange: Vec2CallbackType, x: number = 0, y: number = 0)
    {
        super(x, y);

        this.onChange = onChange;
    }

    destroy (): void
    {
        this.onChange = NOOP;
    }

    set (x: number = 0, y: number = 0): this
    {
        this._x = x;
        this._y = y;

        if (this.onChange)
        {
            this.onChange(this);
        }

        return this;
    }

    get x (): number
    {
        return this._x;
    }

    set x (value: number)
    {
        const prev = this._x;

        this._x = value;

        if (prev !== value)
        {
            this.onChange(this);
        }
    }

    get y (): number
    {
        return this._y;
    }

    set y (value: number)
    {
        const prev = this._y;

        this._y = value;

        if (prev !== value)
        {
            this.onChange(this);
        }
    }
}
