import { Quaternion } from './Quaternion';
import { Vec3 } from '../vec3/Vec3';

export function FromRotationAxis (axis: Vec3, angle: number, out: Quaternion = new Quaternion()): Quaternion
{
    const sin = Math.sin(angle / 2);

    axis.normalize();

    const { x, y, z } = axis;

    return out.set(
        x * sin,
        y * sin,
        z * sin,
        Math.cos(angle / 2)
    );
}
