import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function Scale(a, scalar, out = new Quaternion()) {
    const { x, y, z, w } = a;
    return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
}

export { Scale };
