import { NOOP } from '../../utils/NOOP';
import { Vec3 } from './Vec3';

export type Vec3CallbackType = (vec3: Vec3Callback) => void;

export class Vec3Callback extends Vec3
{
    private _x: number;
    private _y: number;
    private _z: number;

    onChange: Vec3CallbackType;

    constructor (onChange: Vec3CallbackType, x: number = 0, y: number = 0, z: number = 0)
    {
        super(x, y, z);

        this.onChange = onChange;
    }

    destroy (): void
    {
        this.onChange = NOOP;
    }

    set (x: number = 0, y: number = 0, z: number = 0): this
    {
        this._x = x;
        this._y = y;
        this._z = z;

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

    get z (): number
    {
        return this._z;
    }

    set z (value: number)
    {
        const prev = this._z;

        this._z = value;

        if (prev !== value)
        {
            this.onChange(this);
        }
    }
}
