import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function GetAxisAngle(a, out = new Quaternion()) {
    const rad = Math.acos(a.w) * 2;
    const s = Math.sin(rad / 2);
    const epsilon = 0.000001;
    if (s > epsilon) {
        out.set(a.x / s, a.y / s, a.z / s);
    }
    else {
        out.set(1, 0, 0);
    }
    return rad;
}

export { GetAxisAngle };
