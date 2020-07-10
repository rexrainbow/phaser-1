import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function MultiplyByFloats(a, x, y, z, w, out = new Quaternion()) {
    return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
}

export { MultiplyByFloats };
