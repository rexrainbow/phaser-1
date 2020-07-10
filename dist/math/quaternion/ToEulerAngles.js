import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../mat4/Matrix4.js';
import { Vec3 } from '../vec3/Vec3.js';
import '../mat4/Invert.js';
import '../mat4/Multiply.js';
import '../vec3/Backward.js';
import '../vec3/Down.js';
import '../vec3/Forward.js';
import '../vec3/Left.js';
import '../vec3/Right.js';
import '../vec3/Up.js';
import '../vec3/Zero.js';
import '../vec3/const.js';
import '../vec3/Scale.js';
import '../vec3/TransformMat4.js';
import '../vec3/Project.js';
import '../vec3/Unproject.js';

function ToEulerAngles(q, out = new Vec3()) {
    const { x, y, z, w } = q;
    const sqw = w * w;
    const sqz = z * z;
    const sqx = x * x;
    const sqy = y * y;
    const zAxisY = y * z - x * w;
    const limit = 0.4999999;
    if (zAxisY < -limit) {
        return out.set(Math.PI / 2, 2 * Math.atan2(y, w), 0);
    }
    else if (zAxisY > limit) {
        return out.set(-Math.PI / 2, 2 * Math.atan2(y, w), 0);
    }
    else {
        return out.set(Math.asin(-2.0 * (z * y - x * w)), Math.atan2(2.0 * (z * x + y * w), (sqz - sqx - sqy + sqw)), Math.atan2(2.0 * (x * y + z * w), (-sqz - sqx + sqy + sqw)));
    }
}

export { ToEulerAngles };
