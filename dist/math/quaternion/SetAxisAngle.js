import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function SetAxisAngle(axis, angle, out = new Quaternion()) {
    const { x, y, z } = axis;
    angle *= 0.5;
    const s = Math.sin(angle);
    return out.set(x * s, y * s, z * s, Math.cos(angle));
}

export { SetAxisAngle };
