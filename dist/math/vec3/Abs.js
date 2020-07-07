import { Vec3 } from './Vec3.js';

function Abs(a, out = new Vec3()) {
    return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
}

export { Abs };
