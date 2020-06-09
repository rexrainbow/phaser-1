import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

//  To premultiply just swap the order of a and b

export function Multiply (a: IQuaternion, b: IQuaternion, out: Quaternion = new Quaternion()): IQuaternion
{
    const { x: ax, y: ay, z: az, w: aw } = a;
    const { x: bx, y: by, z: bz, w: bw } = b;

    return out.set(
        ax * bw + aw * bx + ay * bz - az * by,
        ay * bw + aw * by + az * bx - ax * bz,
        az * bw + aw * bz + ax * by - ay * bx,
        aw * bw - ax * bx - ay * by - az * bz
    );
}
