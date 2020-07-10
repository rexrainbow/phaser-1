import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

// t - interpolation amount, in the range [0-1], between the two inputs

export function Vec2Lerp (a: IVec2Like, b: IVec2Like, t: number, out: Vec2 = new Vec2()): Vec2
{
    const x = a.x;
    const y = a.y;

    return out.set(
        x + t * (b.x - x),
        y + t * (b.y - y)
    );
}
