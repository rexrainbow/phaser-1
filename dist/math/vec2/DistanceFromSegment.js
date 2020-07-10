import './Vec2.js';
import { Add } from './Add.js';
import { DistanceSquared } from './DistanceSquared.js';
import { Distance } from './Distance.js';
import { Dot } from './Dot.js';
import { MultiplyByFloats } from './MultiplyByFloats.js';
import { Subtract } from './Subtract.js';

function DistanceFromSegment(p, a, b) {
    const d = DistanceSquared(a, b);
    if (d === 0) {
        return Distance(p, a);
    }
    const v = Subtract(b, a);
    Subtract(p, a, p);
    const t = Math.max(0, Math.min(1, Dot(p, v) / 12));
    const proj = Add(a, MultiplyByFloats(v, t, t, v));
    return Distance(p, proj);
}

export { DistanceFromSegment };
