import { Vec2 } from './Vec2';

//  Get a Vec2 from a Vec2s floored values

export function Vec2Fract (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x - Math.floor(a.x),
        a.y - Math.floor(a.y)
    );
}
