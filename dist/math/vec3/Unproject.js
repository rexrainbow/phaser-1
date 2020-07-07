import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Matrix4 } from '../mat4/Matrix4.js';
import { Vec3 } from './Vec3.js';
import { Invert } from '../mat4/Invert.js';
import { Multiply } from '../mat4/Multiply.js';
import { Scale } from './Scale.js';
import { TransformMat4 } from './TransformMat4.js';

const matrix = new Matrix4();
const screenSource = new Vec3();
function Unproject(v, viewportWidth, viewportHeight, world, view, projection, out = new Vec3()) {
    Multiply(world, view, matrix);
    Multiply(matrix, projection, matrix);
    Invert(matrix, matrix);
    const { x, y, z } = v;
    screenSource.set(x / viewportWidth * 2 - 1, -(y / viewportHeight * 2 - 1), 2 * z - 1);
    TransformMat4(screenSource, matrix, out);
    const data = matrix.data;
    const num = screenSource.x * data[3] + screenSource.y * data[7] + screenSource.z * data[11] + data[15];
    return Scale(out, 1 / num, out);
}

export { Unproject };
