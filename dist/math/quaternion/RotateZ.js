import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function RotateZ(a, angle, out = new Quaternion()) {
    angle *= 0.5;
    const { x, y, z, w } = a;
    const bz = Math.sin(angle);
    const bw = Math.cos(angle);
    return out.set(x * bw + y * bz, y * bw - x * bz, z * bw + w * bz, w * bw - z * bz);
}

export { RotateZ };
