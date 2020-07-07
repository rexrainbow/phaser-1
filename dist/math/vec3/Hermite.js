import { Vec3 } from './Vec3.js';
import { Hermite as Hermite$1 } from '../Hermite.js';

function Hermite(a, b, c, d, t, out = new Vec3()) {
    return out.set(Hermite$1(t, a.x, b.x, c.x, d.x), Hermite$1(t, a.y, b.y, c.y, d.y), Hermite$1(t, a.z, b.z, c.z, d.z));
}

export { Hermite };
