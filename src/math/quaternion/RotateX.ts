import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

// Rotates a quaternion by the given angle about the X axis

export function RotateX (a: IQuaternionLike, angle: number, out: Quaternion = new Quaternion()): Quaternion
{
    angle *= 0.5;

    const { x, y, z, w } = a;

    const bx = Math.sin(angle);
    const bw = Math.cos(angle);

    return out.set(
        x * bw + w * bx,
        y * bw + z * bx,
        z * bw - y * bx,
        w * bw - x * bx
    );
}
