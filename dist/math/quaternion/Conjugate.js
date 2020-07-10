import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function Conjugate(a, out = new Quaternion()) {
    const { x, y, z, w } = a;
    return out.set(x * -1, y * -1, z * -1, w);
}

export { Conjugate };
