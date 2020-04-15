import IMatrix2D from './IMatrix2D';
import Vec2 from '../vec2/Vec2';

export default function LocalToGlobal (mat: IMatrix2D, x: number, y: number, outPoint: Vec2 = new Vec2()): Vec2
{
    const { a, b, c, d, tx, ty } = mat;

    outPoint.x = (a * x) + (c * y) + tx;
    outPoint.y = (b * x) + (d * y) + ty;

    return outPoint;
}
