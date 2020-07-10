import { Vec3 } from './Vec3';
import { Vec3Dot } from './Vec3Dot';
import { Vec3Scale } from './Vec3Scale';
import { Vec3Subtract } from './Vec3Subtract';

// reflect incident vector off plane orthogonal to normal
// normal is assumed to have unit length

export function Vec3Reflect (a: Vec3, normal: Vec3, out: Vec3 = new Vec3()): Vec3
{
    Vec3Scale(normal, 2 * Vec3Dot(a, normal), out);

    return Vec3Subtract(a, out, out);
}
