import { Add, Clone, Cross, Distance, Divide, Dot, Length, LengthSquared, Multiply, Negate, Normalize, Scale, Subtract } from './';

import { IVec4Like } from './IVec4Like';

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

    copy (v: IVec4Like): this
    {
        return this.set(v.x, v.y, v.z, v.w);
    }

    add (va: Vec4, vb?: Vec4): this
    {
        if (vb)
        {
            Add(va, vb, this);
        }
        else
        {
            Add(this, va, this);
        }

        return this;
    }

    subtract (va: Vec4, vb?: Vec4): this
    {
        if (vb)
        {
            Subtract(va, vb, this);
        }
        else
        {
            Subtract(this, va, this);
        }

        return this;
    }

    multiply (v: Vec4): this
    {
        return Multiply(this, v, this) as this;
    }

    divide (v: Vec4): this
    {
        return Divide(this, v, this) as this;
    }

    distance (v: IVec4Like): number
    {
        return Distance(this, v);
    }

    negate (): this
    {
        return Negate(this, this) as this;
    }

    cross (va: Vec4, vb?: Vec4): this
    {
        if (vb)
        {
            Cross(va, vb, this);
        }
        else
        {
            Cross(this, va, this);
        }

        return this;
    }

    scale (scalar: number): this
    {
        return Scale(this, scalar, this) as this;
    }

    normalize (): this
    {
        return Normalize(this, this) as this;
    }

    dot (v: IVec4Like): number
    {
        return Dot(this, v);
    }

    clone (): Vec4
    {
        return Clone(this);
    }

    get length (): number
    {
        return Length(this);
    }

    get lengthSquared (): number
    {
        return LengthSquared(this);
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
