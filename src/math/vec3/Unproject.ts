import { Invert, Matrix4, Multiply } from '../mat4';

import { Scale } from './Scale';
import { TransformMat4 } from '.';
import { Vec3 } from './Vec3';

const matrix = new Matrix4();
const screenSource = new Vec3();

export function Unproject (v: Vec3, viewportWidth: number, viewportHeight: number, world: Matrix4, view: Matrix4, projection: Matrix4, out: Vec3 = new Vec3()): Vec3
{
    Multiply(world, view, matrix);
    Multiply(matrix, projection, matrix);
    Invert(matrix, matrix);

    const { x, y, z } = v;

    screenSource.set(
        x / viewportWidth * 2 - 1,
        -(y / viewportHeight * 2 - 1),
        2 * z - 1
    );

    TransformMat4(screenSource, matrix, out);

    const data = matrix.data;

    const num = screenSource.x * data[3] + screenSource.y * data[7] + screenSource.z * data[11] + data[15];

    //  if within epsilon?
    return Scale(out, 1 / num, out);
}
