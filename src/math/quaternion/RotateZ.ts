import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

// Rotates a quaternion by the given angle about the Z axis

export function RotateZ (a: IQuaternion, angle: number, out: IQuaternion = new Quaternion()): IQuaternion
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
