import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function Clone (source: IVec2): Vec2
{
    return new Vec2(source.x, source.y);
}
