export class Vec3
{
    x: number;
    y: number;
    z: number;

    constructor (x: number = 0, y: number = 0, z: number = 0)
    {
        this.set(x, y, z);
    }

    set (x: number = 0, y: number = 0, z: number = 0): this
    {
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
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

        return `{ x=${x}, y=${y}, z=${z} }`;
    }
}
