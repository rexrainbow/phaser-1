import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/mat4/Matrix4.js';
import '../math/vec3/Vec3.js';
import '../math/mat4/Invert.js';
import '../math/mat4/Multiply.js';
import '../math/vec3/Backward.js';
import '../math/vec3/Down.js';
import '../math/vec3/Forward.js';
import '../math/vec3/Left.js';
import '../math/vec3/Right.js';
import '../math/vec3/Up.js';
import '../math/vec3/Zero.js';
import '../math/vec3/const.js';
import '../math/vec3/Scale.js';
import '../math/Clamp.js';
import '../math/vec3/TransformMat4.js';
import '../math/vec3/Project.js';
import '../math/vec3/Vec3Callback.js';
import '../math/vec3/RGBCallback.js';
import '../math/vec3/Unproject.js';
import { Material } from '../gameobjects3d/material/Material.js';

const RedRubber = new Material({
    ambient: [0.05, 0, 0],
    diffuse: [0.5, 0.4, 0.4],
    specular: [0.7, 0.04, 0.04],
    shine: 0.078125
});

export { RedRubber };
