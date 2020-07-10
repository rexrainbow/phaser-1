import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function Zero() {
    return new Quaternion(0, 0, 0, 0);
}

export { Zero };
