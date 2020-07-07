import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';

function Clone(source) {
    const { x, y, z, w } = source;
    return new Quaternion(x, y, z, w);
}

export { Clone };
