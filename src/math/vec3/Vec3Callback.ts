import { NOOP } from '../../utils/NOOP';

export class Vec3Callback
{
    private _x: number;
    private _y: number;
    private _z: number;

    onChange: (vec3: Vec3Callback) => void;

    constructor (onChange: (vec3: Vec3Callback) => void = NOOP, x: number = 0, y: number = 0, z: number = 0)
    {
        this._x = x;
        this._y = y;
        this._z = z;

        this.onChange = onChange;
    }

    set (x: number = 0, y: number = 0, z: number = 0): this
    {
        this._x = x;
        this._y = y;
        this._z = z;

        this.onChange(this);

        return this;
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

    get x (): number
    {
        return this._x;
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

    get y (): number
    {
        return this._y;
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

    get z (): number
    {
        return this._z;
    }

    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        const { x, y, z } = this;

        dst[ index ] = x;
        dst[ index + 1 ] = y;
        dst[ index + 2 ] = z;

        return dst;
    }

    fromArray (src: Float32List, index: number = 0): this
    {
        return this.set(
            src[ index ],
            src[ index + 1 ],
            src[ index + 2 ]
        );
    }

    toString (): string
    {
        const { x, y, z } = this;

        return `[ x=${x}, y=${y}, z=${z} ]`;
    }

    destroy (): void
    {
        this.onChange = NOOP;
    }
}
