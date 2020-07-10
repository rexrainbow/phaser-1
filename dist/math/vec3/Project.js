import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Matrix4 } from '../mat4/Matrix4.js';
import { Vec3 } from './Vec3.js';
import { Multiply } from '../mat4/Multiply.js';
import { TransformMat4 } from './TransformMat4.js';

const tempMatrix1 = new Matrix4();
const tempMatrix2 = new Matrix4();
function Project(v, world, transform, viewport, out = new Vec3()) {
    const { x, y, width, height } = viewport;
    tempMatrix1.set(width / 2, 0, 0, 0, 0, -height / 2, 0, 0, 0, 0, 0.5, 0, x + width / 2, height / 2 + y, 0.5, 1);
    Multiply(world, transform, tempMatrix2);
    Multiply(tempMatrix2, tempMatrix1, tempMatrix2);
    return TransformMat4(v, tempMatrix2, out);
}

export { Project };
