import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

// Rotates a quaternion by the given angle about the Y axis

export function RotateY (a: IQuaternionLike, angle: number, out: Quaternion = new Quaternion()): Quaternion
{
    angle *= 0.5;

    const { x, y, z, w } = a;

    const by = Math.sin(angle);
    const bw = Math.cos(angle);

    return out.set(
        x * bw - z * by,
        y * bw + w * by,
        z * bw + x * by,
        w * bw - y * by
    );
}
