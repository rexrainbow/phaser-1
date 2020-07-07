import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';
import './Dot.js';
import { CopyFrom } from './CopyFrom.js';
import { GetAngle } from './GetAngle.js';
import './Length.js';
import './Scale.js';
import './Normalize.js';
import { Slerp } from './Slerp.js';

function RotateTowards(a, b, step, out = new Quaternion()) {
    const angle = GetAngle(a, b);
    if (angle === 0) {
        return CopyFrom(a, out);
    }
    const t = Math.min(1, step / angle);
    return Slerp(a, b, t, out);
}

export { RotateTowards };
