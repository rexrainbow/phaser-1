import { IVec2 } from './IVec2';

export class Vec2 implements IVec2
{
    /**
     * X component
     *
     * @type {number}
     * @memberof Vec2
     */
    x: number;

    /**
     * Y component
     *
     * @type {number}
     * @memberof Vec2
     */
    y: number;

    /**
     * Creates an instance of a Vector2.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @memberof Vec2
     */
    constructor (x: number = 0, y: number = 0)
    {
        this.x = x;
        this.y = y;
    }

    set (x: number = 0, y: number = 0): this
    {
        this.x = x;
        this.y = y;

        return this;
    }

    /**
     * Sets the Vector2 coordinates into the given array, or a new array, at
     * the given index.
     */
    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        dst[ index ] = this.x;
        dst[ index + 1 ] = this.y;

        return dst;
    }

    /**
     * Sets the values of this Vector2 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 2 elements, starting from index 0 through to index 1.
     */
    fromArray (src: Float32List, index: number = 0): this
    {
        return this.set(src[ index ], src[ index + 1 ]);
    }

    toString (): string
    {
        return `[x=${this.x}, y=${this.y}]`;
    }

    get width (): number
    {
        return this.x;
    }

    set width (value: number)
    {
        this.x = value;
    }

    get height (): number
    {
        return this.y;
    }

    set height (value: number)
    {
        this.y = value;
    }
}
