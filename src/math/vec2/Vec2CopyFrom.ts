import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function Vec2CopyFrom (source: IVec2Like, dest: Vec2): Vec2
{
    return dest.set(source.x, source.y);
}
