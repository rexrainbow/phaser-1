import { Vec4Callback, Vec4CallbackType } from './Vec4Callback';

export class RGBACallback extends Vec4Callback
{
    constructor (onChange: Vec4CallbackType, r: number = 0, g: number = 0, b: number = 0, a: number = 1)
    {
        super(onChange, r, g, b, a);
    }

    set r (value: number)
    {
        this.x = value;
    }

    get r (): number
    {
        return this.x;
    }

    set g (value: number)
    {
        this.y = value;
    }

    get g (): number
    {
        return this.y;
    }

    set b (value: number)
    {
        this.z = value;
    }

    get b (): number
    {
        return this.z;
    }

    set a (value: number)
    {
        this.w = value;
    }

    get a (): number
    {
        return this.w;
    }

    toString (): string
    {
        const { x, y, z, w } = this;

        return `[ r=${x}, g=${y}, b=${z}, a=${w} ]`;
    }
}
