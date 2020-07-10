import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';
import { Length } from './Length.js';
import { Scale } from './Scale.js';

function Normalize(a, out = new Quaternion()) {
    const length = Length(a);
    if (length === 0) {
        return out.set(0, 0, 0, 1);
    }
    else {
        return Scale(a, length, out);
    }
}

export { Normalize };
