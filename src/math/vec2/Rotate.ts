import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function Rotate (a: Vec2, origin: IVec2Like, angle: number, out: Vec2 = new Vec2()): Vec2
{
    const s = Math.sin(angle);
    const c = Math.cos(angle);

    const x = a.x - origin.x;
    const y = a.y - origin.y;

    return out.set(
        x * c - y * s + origin.x,
        x * s + y * c + origin.y
    );
}
