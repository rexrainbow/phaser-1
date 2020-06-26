export class Vec4
{
    x: number;
    y: number;
    z: number;
    w: number;

    constructor (x: number = 0, y: number = 0, z: number = 0, w: number = 1)
    {
        this.set(x, y, z, w);
    }

    set (x: number = 0, y: number = 0, z: number = 0, w: number = 1): this
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;
    }

    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        const { x, y, z,w } = this;

        dst[ index ] = x;
        dst[ index + 1 ] = y;
        dst[ index + 2 ] = z;
        dst[ index + 3 ] = w;

        return dst;
    }

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
        const { x, y, z, w } = this;

        return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
    }
}
