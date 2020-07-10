import { IMatrix4 } from '../mat4/IMatrix4';
import { Vec2 } from './Vec2';

export function Vec2TransformMat4 (v: Vec2, m: IMatrix4, out: Vec2 = new Vec2()): Vec2
{
    const data = m.data;

    return out.set(
        data[0] * v.x + data[4] * v.y + data[12],
        data[1] * v.x + data[5] * v.y + data[13]
    );
}
