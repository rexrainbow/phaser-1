import { Add, Clone, Cross, Distance, Divide, Dot, Inverse, Length, LengthSquared, Multiply, Negate, Normalize, Scale, Subtract } from './';

import { IVec3Like } from './IVec3Like';

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

    copy (v: IVec3Like): this
    {
        return this.set(v.x, v.y, v.z);
    }

    add (va: IVec3Like, vb?: IVec3Like): this
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

    subtract (va: IVec3Like, vb?: IVec3Like): this
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

    multiply (v: IVec3Like): this
    {
        return Multiply(this, v, this) as this;
    }

    divide (v: IVec3Like): this
    {
        return Divide(this, v, this) as this;
    }

    inverse (): this
    {
        return Inverse(this, this) as this;
    }

    distance (v: IVec3Like): number
    {
        return Distance(this, v);
    }

    negate (): this
    {
        return Negate(this, this) as this;
    }

    cross (va: IVec3Like, vb?: IVec3Like): this
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

    dot (v: IVec3Like): number
    {
        return Dot(this, v);
    }

    clone (): Vec3
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
