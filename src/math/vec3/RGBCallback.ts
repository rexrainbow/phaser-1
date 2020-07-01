import { Vec3Callback, Vec3CallbackType } from './Vec3Callback';

export class RGBCallback extends Vec3Callback
{
    constructor (onChange: Vec3CallbackType, r: number = 0, g: number = 0, b: number = 0)
    {
        super(onChange, r, g, b);
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

    toString (): string
    {
        const { x, y, z } = this;

        return `[ r=${x}, g=${y}, b=${z} ]`;
    }
}
