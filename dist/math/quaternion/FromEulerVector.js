import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';
import { RotationYawPitchRoll } from './RotationYawPitchRoll.js';

function FromEulerVector(v, out = new Quaternion()) {
    return RotationYawPitchRoll(v.y, v.x, v.z, out);
}

export { FromEulerVector };
