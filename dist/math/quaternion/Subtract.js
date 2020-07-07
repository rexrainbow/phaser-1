import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function Subtract(a, b, out = new Quaternion()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
}

export { Subtract };
