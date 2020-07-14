import { Quaternion } from './Quaternion';

// Rotates a quaternion by the given angle about the Z axis

export function QuatRotateZ (a: Quaternion, angle: number, out: Quaternion = new Quaternion()): Quaternion
{
    angle *= 0.5;

    const { x, y, z, w } = a;

    const bz = Math.sin(angle);
    const bw = Math.cos(angle);

    return out.set(
        x * bw + y * bz,
        y * bw - x * bz,
        z * bw + w * bz,
        w * bw - z * bz
    );
}
