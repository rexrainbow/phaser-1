import { NOOP } from '../../utils/NOOP';

export class Vec3Callback
{
    private _x: number;
    private _y: number;
    private _z: number;

    callback: (vec3: Vec3Callback) => void;

    compareValue: boolean = false;

    constructor (callback: (vec3: Vec3Callback) => void, x: number = 0, y: number = 0, z: number = 0, compareValue: boolean = false)
    {
        this._x = x;
        this._y = y;
        this._z = z;
        this.callback = callback;
        this.compareValue = compareValue;
    }

    set (x: number = 0, y: number = 0, z: number = 0): this
    {
        this._x = x;
        this._y = y;
        this._z = z;

        this.callback(this);

        return this;
    }

    destroy (): void
    {
        this.callback = NOOP;
    }

    set x (value: number)
    {
        if (!this.compareValue || (this.compareValue && value !== this._x))
        {
            this._x = value;

            this.callback(this);
        }
    }

    get x (): number
    {
        return this._x;
    }

    set y (value: number)
    {
        if (!this.compareValue || (this.compareValue && value !== this._y))
        {
            this._y = value;

            this.callback(this);
        }
    }

    get y (): number
    {
        return this._y;
    }

    set z (value: number)
    {
        if (!this.compareValue || (this.compareValue && value !== this._z))
        {
            this._z = value;

            this.callback(this);
        }
    }

    get z (): number
    {
        return this._z;
    }

    /**
     * Sets the Vector3 coordinates into the given array, or a new array, at
     * the given index.
     */
    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        dst[ index ] = this._x;
        dst[ index + 1 ] = this._y;
        dst[ index + 2 ] = this._z;

        return dst;
    }

    /**
     * Sets the values of this Vector3 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 3 elements, starting from index 0 through to index 2.
     */
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
        return `[ x=${this.x}, y=${this.y}, z=${this.z} ]`;
    }
}
