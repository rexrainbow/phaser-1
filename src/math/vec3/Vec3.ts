import { IVec3 } from './IVec3';

export class Vec3 implements IVec3
{
    /**
     * X component
     */
    x: number;

    /**
     * Y component
     */
    y: number;

    /**
     * Z component
     */
    z: number;

    /**
     * Creates an instance of a Vector2.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     */
    constructor (x: number = 0, y: number = 0, z: number = 0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    set (x: number = 0, y: number = 0, z: number = 0): this
    {
        this.x = x;
        this.y = y;
        this.z = z;

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
        dst[ index + 2 ] = this.z;

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
            src[ index + 1 ],
            src[ index + 2 ]
        );
    }

    toString (): string
    {
        return `[ x=${this.x}, y=${this.y}, z=${this.z} ]`;
    }
}
