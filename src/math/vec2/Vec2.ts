export class Vec2
{
    x: number;
    y: number;

    constructor (x: number = 0, y: number = 0)
    {
        this.set(x, y);
    }

    set (x: number = 0, y: number = 0): this
    {
        this.x = x;
        this.y = y;

        return this;
    }

    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        const { x, y } = this;

        dst[ index ] = x;
        dst[ index + 1 ] = y;

        return dst;
    }

    fromArray (src: Float32List, index: number = 0): this
    {
        return this.set(
            src[ index ],
            src[ index + 1 ]
        );
    }

    toString (): string
    {
        const { x, y } = this;

        return `{ x=${x}, y=${y} }`;
    }
}
