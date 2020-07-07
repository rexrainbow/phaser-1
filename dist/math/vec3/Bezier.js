import { Vec3 } from './Vec3.js';
import { Bezier as Bezier$1 } from '../Bezier.js';

function Bezier(a, b, c, d, t, out = new Vec3()) {
    return out.set(Bezier$1(t, a.x, b.x, c.x, d.x), Bezier$1(t, a.y, b.y, c.y, d.y), Bezier$1(t, a.z, b.z, c.z, d.z));
}

export { Bezier };
