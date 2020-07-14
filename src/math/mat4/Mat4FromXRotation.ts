import { Matrix4 } from './Matrix4';

export function Mat4FromXRotation (angle: number, out: Matrix4 = new Matrix4()): Matrix4
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
