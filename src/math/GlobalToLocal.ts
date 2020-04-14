import Vec2 from './Vec2';

export default function GlobalToLocal (transform: Float32Array, x: number, y: number, outPoint: Vec2 = new Vec2()): Vec2
{
    const [ a, b, c, d, tx, ty ] = transform;

    const id: number = 1 / ((a * d) + (c * -b));

    outPoint.x = (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id);
    outPoint.y = (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id);

    return outPoint;
}
