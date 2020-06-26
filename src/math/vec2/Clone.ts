import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function Clone (source: IVec2Like): Vec2
{
    return new Vec2(source.x, source.y);
}
