import { Dot } from './Dot';
import { Scale } from './Scale';
import { Subtract } from './Subtract';
import { Vec3 } from './Vec3';

// reflect incident vector off plane orthogonal to normal
// normal is assumed to have unit length

export function Reflect (a: Vec3, normal: Vec3, out: Vec3 = new Vec3()): Vec3
{
    Scale(normal, 2 * Dot(a, normal), out);

    return Subtract(a, out, out);
}
