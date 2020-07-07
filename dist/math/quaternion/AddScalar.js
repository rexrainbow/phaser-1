import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function AddScalar(a, scalar, out = new Quaternion()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
}

export { AddScalar };
