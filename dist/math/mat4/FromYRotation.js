import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Matrix4 } from './Matrix4.js';

function FromYRotation(angle, out = new Matrix4()) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return out.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
}

export { FromYRotation };
