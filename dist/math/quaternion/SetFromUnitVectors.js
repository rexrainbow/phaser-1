import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../mat4/Matrix4.js';
import '../vec3/Vec3.js';
import { Quaternion } from './Quaternion.js';
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
import { Dot } from '../vec3/Dot.js';
import '../vec3/Scale.js';
import '../vec3/TransformMat4.js';
import '../vec3/Project.js';
import '../vec3/Unproject.js';

function SetFromUnitVectors(a, from, to, out = new Quaternion()) {
    const { x: fx, y: fy, z: fz } = from;
    const { x: tx, y: ty, z: tz } = to;
    const epsilon = 0.000001;
    let r = Dot(from, to) + 1;
    if (r < epsilon) {
        r = 0;
        if (Math.abs(fx) > Math.abs(fz)) {
            return out.set(-fy, fx, 0, r);
        }
        else {
            return out.set(0, -fz, fy, r);
        }
    }
    else {
        return out.set(fy * tz - fz * ty, fz * tx - fx * tz, fx * ty - fy * tx, r);
    }
}

export { SetFromUnitVectors };
