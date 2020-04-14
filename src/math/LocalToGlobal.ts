import Vec2 from './Vec2';

export default function LocalToGlobal (transform: Float32Array, x: number, y: number, outPoint: Vec2 = new Vec2()): Vec2
{
    const [ a, b, c, d, tx, ty ] = transform;

    outPoint.x = (a * x) + (c * y) + tx;
    outPoint.y = (b * x) + (d * y) + ty;

    return outPoint;
}
