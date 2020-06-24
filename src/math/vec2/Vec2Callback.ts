import { NOOP } from '../../utils/NOOP';

export class Vec2Callback
{
    private _x: number;
    private _y: number;

    callback: (vec2: Vec2Callback) => void;

    compareValue: boolean = false;

    constructor (callback: (vec2: Vec2Callback) => void, x: number = 0, y: number = 0, compareValue: boolean = false)
    {
        this._x = x;
        this._y = y;
        this.callback = callback;
        this.compareValue = compareValue;
    }

    set (x: number = 0, y: number = 0): this
    {
        this._x = x;
        this._y = y;

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

    /**
     * Sets the Vector2 coordinates into the given array, or a new array, at
     * the given index.
     */
    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        dst[ index ] = this._x;
        dst[ index + 1 ] = this._y;

        return dst;
    }

    /**
     * Sets the values of this Vector2 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 2 elements, starting from index 0 through to index 1.
     */
    fromArray (src: Float32List, index: number = 0): this
    {
        return this.set(
            src[ index ],
            src[ index + 1 ]
        );
    }

    toString (): string
    {
        return `[ x=${this.x}, y=${this.y} ]`;
    }
}
