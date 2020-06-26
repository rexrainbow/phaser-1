import { Matrix4, Multiply } from '../mat4';

import { IMatrix4 } from '../mat4/IMatrix4';
import { IRectangle } from '../../geom/rectangle/IRectangle';
import { IVec3Like } from './IVec3Like';
import { TransformMat4 } from '.';
import { Vec3 } from './Vec3';

const tempMatrix1 = new Matrix4();
const tempMatrix2 = new Matrix4();

export function Project (v: IVec3Like, world: IMatrix4, transform: IMatrix4, viewport: IRectangle, out: Vec3 = new Vec3()): Vec3
{
    const { x, y, width, height } = viewport;

    tempMatrix1.set(
        width / 2, 0, 0, 0,
        0, -height / 2, 0, 0,
        0, 0, 0.5, 0,
        x + width / 2, height / 2 + y, 0.5, 1
    );

    Multiply(world, transform, tempMatrix2);
    Multiply(tempMatrix2, tempMatrix1, tempMatrix2);

    return TransformMat4(v, tempMatrix2, out);
}
