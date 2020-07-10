import { Vec2 } from './Vec2';

/**
 * Takes the `x` and `y` coordinates and transforms them into the same space as
 * defined by the position, rotation and scale values.
 */
export function Vec2FromTransform (x: number, y: number, positionX: number, positionY: number, rotation: number, scaleX: number, scaleY: number, out: Vec2 = new Vec2()): Vec2
{
    const sin = Math.sin(rotation);
    const cos = Math.cos(rotation);

    // Rotate and Scale
    const a = cos * scaleX;
    const b = sin * scaleX;
    const c = -sin * scaleY;
    const d = cos * scaleY;

    //  Invert
    const id = 1 / ((a * d) + (c * -b));

    return out.set(
        (d * id * x) + (-c * id * y) + (((positionY * c) - (positionX * d)) * id),
        (a * id * y) + (-b * id * x) + (((-positionY * a) + (positionX * b)) * id)
    );
}
