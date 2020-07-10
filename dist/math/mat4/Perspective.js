import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Matrix4 } from './Matrix4.js';

function Perspective(fovY, aspect, near, far, out = new Matrix4()) {
    const f = 1 / Math.tan(fovY / 2);
    let m22 = -1;
    let m32 = -2 * near;
    if (far !== null && far !== Infinity) {
        const nf = 1 / (near - far);
        m22 = (far + near) * nf;
        m32 = 2 * far * near * nf;
    }
    return out.set(f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, m22, -1, 0, 0, m32, 0);
}

export { Perspective };
