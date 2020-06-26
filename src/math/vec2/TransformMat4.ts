import { IMatrix4 } from '../mat4/IMatrix4';
import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function TransformMat4 (v: IVec2Like, m: IMatrix4, out: Vec2 = new Vec2()): Vec2
{
    const data = m.data;

    return out.set(
        data[0] * v.x + data[4] * v.y + data[12],
        data[1] * v.x + data[5] * v.y + data[13]
    );
}
