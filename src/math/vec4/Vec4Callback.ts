import { NOOP } from '../../utils/NOOP';

export class Vec4Callback
{
    private _x: number;
    private _y: number;
    private _z: number;
    private _w: number;

    callback: (vec4: Vec4Callback) => void;

    compareValue: boolean = false;

    constructor (callback: (vec4: Vec4Callback) => void, x: number = 0, y: number = 0, z: number = 0, w: number = 1, compareValue: boolean = false)
    {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
        this.callback = callback;
        this.compareValue = compareValue;
    }

    set (x: number = 0, y: number = 0, z: number = 0, w: number = 1): this
    {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;

        this.callback(this);

        return this;
    }

    destroy (): void
    {
        this.callback = NOOP;
    }

    set x (value: number)
    {
        const prev = this._x;

        this._x = value;

        if (this.compareValue && prev !== value)
        {
            this.callback(this);
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

        if (this.compareValue && prev !== value)
        {
            this.callback(this);
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

        if (this.compareValue && prev !== value)
        {
            this.callback(this);
        }
    }

    get z (): number
    {
        return this._z;
    }

    set w (value: number)
    {
        const prev = this._w;

        this._w = value;

        if (this.compareValue && prev !== value)
        {
            this.callback(this);
        }
    }

    get w (): number
    {
        return this._w;
    }

    /**
     * Sets the Vector4 coordinates into the given array, or a new array, at
     * the given index.
     */
    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        dst[ index ] = this._x;
        dst[ index + 1 ] = this._y;
        dst[ index + 2 ] = this._z;
        dst[ index + 3 ] = this._w;

        return dst;
    }

    /**
     * Sets the values of this Vector4 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 4 elements, starting from index 0 through to index 3.
     */
    fromArray (src: Float32List, index: number = 0): this
    {
        return this.set(
            src[ index ],
            src[ index + 1 ],
            src[ index + 2 ],
            src[ index + 3 ]
        );
    }

    toString (): string
    {
        return `[ x=${this.x}, y=${this.y}, z=${this.z}, w=${this.w} ]`;
    }
}
