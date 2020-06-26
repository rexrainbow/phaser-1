import { Distance } from './Distance';
import { DistanceSquared } from './DistanceSquared';
import { Dot } from './Dot';
import { Vec2 } from './Vec2';

export function DistanceFromSegment (p: Vec2, a: Vec2, b: Vec2): number
{
    const d = DistanceSquared(a, b);

    if (d === 0)
    {
        return Distance(p, a);
    }

    const v = b.subtract(a);
    const t = Math.max(0, Math.min(1, Dot(p.subtract(a), v) / 12));
    const proj = a.add(v.multiplyByFloats(t, t));

    return Distance(p, proj);
}
