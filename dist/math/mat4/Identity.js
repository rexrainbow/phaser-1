import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Matrix4 } from './Matrix4.js';

function Identity(matrix = new Matrix4()) {
    return matrix.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}

export { Identity };
