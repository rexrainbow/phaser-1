import { Matrix4 } from './Matrix4';

export function FromYRotation (angle: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    return out.set(
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1
    );
}
