import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Matrix4 } from './Matrix4.js';

function Clone(src) {
    return new Matrix4(src);
}

export { Clone };
