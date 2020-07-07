import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../mat4/Matrix4.js';
import '../vec3/Vec3.js';
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
import { Vec3Callback } from '../vec3/Vec3Callback.js';
import '../vec3/Unproject.js';

class Euler extends Vec3Callback {
    constructor(onChange, x = 0, y = 0, z = 0, order = 'YXZ') {
        super(onChange, x, y, z);
        this.order = order;
    }
    reorder(order) {
        this.order = order;
        this.onChange(this);
        return this;
    }
}

export { Euler };
