import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function RotateY(a, angle, out = new Quaternion()) {
    angle *= 0.5;
    const { x, y, z, w } = a;
    const by = Math.sin(angle);
    const bw = Math.cos(angle);
    return out.set(x * bw - z * by, y * bw + w * by, z * bw + x * by, w * bw - y * by);
}

export { RotateY };
