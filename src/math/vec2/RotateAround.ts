import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function RotateAround (a: IVec2, center: IVec2, angle: number, out: Vec2 = new Vec2()): IVec2
{
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    const x = a.x - center.x;
    const y = a.y - center.y;

    return out.set(
        x * c - y * s + center.x,
        x * s + y * c + center.y
    );
}
