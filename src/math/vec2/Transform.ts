import { FromTransform } from './FromTransform';
import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

/**
 * Takes the `x` and `y` coordinates and transforms them into the same space as
 * defined by the position, rotation and scale values.
 */
export function Transform (v: IVec2Like, positionX: number, positionY: number, rotation: number, scaleX: number, scaleY: number, out: Vec2 = new Vec2()): Vec2
{
    return FromTransform(v.x, v.y, positionX, positionY, rotation, scaleX, scaleY, out);
}
