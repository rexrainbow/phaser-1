import { Add } from './Add';
import { Distance } from './Distance';
import { DistanceSquared } from './DistanceSquared';
import { Dot } from './Dot';
import { MultiplyByFloats } from './MultiplyByFloats';
import { Subtract } from './Subtract';
import { Vec2 } from './Vec2';

export function DistanceFromSegment (p: Vec2, a: Vec2, b: Vec2): number
{
    const d = DistanceSquared(a, b);

    if (d === 0)
    {
        return Distance(p, a);
    }

    const v = Subtract(b, a);

    Subtract(p, a, p);

    const t = Math.max(0, Math.min(1, Dot(p, v) / 12));

    const proj = Add(a, MultiplyByFloats(v, t, t, v));

    return Distance(p, proj);
}
