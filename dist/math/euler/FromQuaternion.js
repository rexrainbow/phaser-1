import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Matrix4 } from '../mat4/Matrix4.js';
import { FromQuat } from '../mat4/FromQuat.js';
import { FromRotationMatrix } from './FromRotationMatrix.js';

const tempMat4 = new Matrix4();
function FromQuaternion(e, q, order = e.order) {
    FromQuat(q, tempMat4);
    return FromRotationMatrix(e, tempMat4, order);
}

export { FromQuaternion };
