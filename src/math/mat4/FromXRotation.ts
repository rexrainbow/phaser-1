import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function FromXRotation (angle: number, out: IMatrix4 = new Matrix4()): IMatrix4
{
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    return out.set(
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
    );
}
