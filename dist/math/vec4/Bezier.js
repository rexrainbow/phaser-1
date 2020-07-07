import { Bezier as Bezier$1 } from '../Bezier.js';
import { Vec4 } from './Vec4.js';

function Bezier(a, b, c, d, t, out = new Vec4()) {
    return out.set(Bezier$1(t, a.x, b.x, c.x, d.x), Bezier$1(t, a.y, b.y, c.y, d.y), Bezier$1(t, a.z, b.z, c.z, d.z), Bezier$1(t, a.w, b.w, c.w, d.w));
}

export { Bezier };
