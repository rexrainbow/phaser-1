import { PackColor } from '../../renderer/webgl1/colors/PackColor';

export class Vertex
{
    x: number = 0;
    y: number = 0;

    u: number = 0;
    v: number = 0;

    texture: number = 0;

    tint: number = 0xffffff;
    alpha: number = 1;
    color: number = 4294967295;

    setPosition (x: number, y: number): this
    {
        this.x = x;
        this.y = y;

        return this;
    }

    setUV (u: number, v: number): this
    {
        this.u = u;
        this.v = v;

        return this;
    }

    setAlpha (value: number): this
    {
        this.alpha = value;

        return this;
    }

    setTint (value: number): this
    {
        this.tint = value;

        return this;
    }

    packColor (): void
    {
        this.color = PackColor(this.tint, this.alpha);
    }
}
