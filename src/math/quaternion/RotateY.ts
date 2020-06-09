import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

// Rotates a quaternion by the given angle about the Y axis

export function RotateY (a: IQuaternion, angle: number, out: IQuaternion = new Quaternion()): IQuaternion
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
