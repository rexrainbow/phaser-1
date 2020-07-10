import { Vec3 } from './Vec3.js';
import { Dot } from './Dot.js';
import { Scale } from './Scale.js';
import { Subtract } from './Subtract.js';

function Reflect(a, normal, out = new Vec3()) {
    Scale(normal, 2 * Dot(a, normal), out);
    return Subtract(a, out, out);
}

export { Reflect };
