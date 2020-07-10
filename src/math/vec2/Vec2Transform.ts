import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';
import { Vec2FromTransform } from './Vec2FromTransform';

/**
 * Takes the `x` and `y` coordinates and transforms them into the same space as
 * defined by the position, rotation and scale values.
 */
export function Vec2Transform (v: IVec2Like, positionX: number, positionY: number, rotation: number, scaleX: number, scaleY: number, out: Vec2 = new Vec2()): Vec2
{
    return Vec2FromTransform(v.x, v.y, positionX, positionY, rotation, scaleX, scaleY, out);
}
