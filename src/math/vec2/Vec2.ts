import { Add } from './Add';
import { Clone } from './Clone';
import { Cross } from './Cross';
import { Divide } from './Divide';
import { Dot } from './Dot';
import { IVec2Like } from './IVec2Like';
import { Length } from './Length';
import { LengthSquared } from './LengthSquared';
import { Multiply } from './Multiply';
import { MultiplyByFloats } from './MultiplyByFloats';
import { Negate } from './Negate';
import { Normalize } from './Normalize';
import { Scale } from './Scale';
import { Subtract } from './Subtract';

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

    copy (v: IVec2Like): this
    {
        return this.set(v.x, v.y);
    }

    add (va: Vec2, vb?: Vec2): this
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

    subtract (va: Vec2, vb?: Vec2): this
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

    multiply (v: Vec2): this
    {
        return Multiply(this, v, this) as this;
    }

    multiplyByFloats (x: number, y: number): this
    {
        return MultiplyByFloats(this, x, y, this) as this;
    }

    divide (v: Vec2): this
    {
        return Divide(this, v, this) as this;
    }

    negate (): this
    {
        return Negate(this, this) as this;
    }

    scale (scalar: number): this
    {
        return Scale(this, scalar, this) as this;
    }

    normalize (): this
    {
        return Normalize(this, this) as this;
    }

    clone (): Vec2
    {
        return Clone(this);
    }

    cross (v: IVec2Like): number
    {
        return Cross(this, v);
    }

    dot (v: IVec2Like): number
    {
        return Dot(this, v);
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
