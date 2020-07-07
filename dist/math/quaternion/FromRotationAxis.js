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
import '../vec3/Scale.js';
import { Normalize } from '../vec3/Normalize.js';
import '../vec3/TransformMat4.js';
import '../vec3/Project.js';
import '../vec3/Unproject.js';

function FromRotationAxis(axis, angle, out = new Quaternion()) {
    const sin = Math.sin(angle / 2);
    Normalize(axis, axis);
    const { x, y, z } = axis;
    return out.set(x * sin, y * sin, z * sin, Math.cos(angle / 2));
}

export { FromRotationAxis };
