import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';
import { RotationYawPitchRoll } from './RotationYawPitchRoll.js';

function FromEulerAngles(x, y, z, out = new Quaternion()) {
    return RotationYawPitchRoll(y, x, z, out);
}

export { FromEulerAngles };
