import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../../math/mat4/Matrix4.js';
import '../../math/vec3/Vec3.js';
import '../../math/mat4/Invert.js';
import '../../math/mat4/Multiply.js';
import '../../math/vec3/Backward.js';
import '../../math/vec3/Down.js';
import '../../math/vec3/Forward.js';
import '../../math/vec3/Left.js';
import '../../math/vec3/Right.js';
import '../../math/vec3/Up.js';
import '../../math/vec3/Zero.js';
import '../../math/vec3/const.js';
import '../../math/vec3/Scale.js';
import '../../math/vec3/TransformMat4.js';
import '../../math/vec3/Project.js';
import { Vec3Callback } from '../../math/vec3/Vec3Callback.js';
import { RGBCallback } from '../../math/vec3/RGBCallback.js';
import '../../math/vec3/Unproject.js';

class Light {
    constructor(config = {}) {
        this.isDirty = false;
        const { x = 0, y = 0, z = 0.1, ambient = [1, 1, 1], diffuse = [1, 1, 1], specular = [1, 1, 1] } = config;
        const onChange = () => this.update();
        this.position = new Vec3Callback(onChange, x, y, z);
        this.ambient = new RGBCallback(onChange).fromArray(ambient);
        this.diffuse = new RGBCallback(onChange).fromArray(diffuse);
        this.specular = new RGBCallback(onChange).fromArray(specular);
    }
    setUniforms(shader) {
        shader.setUniform('uLightPosition', this.position.toArray());
        shader.setUniform('uLightAmbient', this.ambient.toArray());
        shader.setUniform('uLightDiffuse', this.diffuse.toArray());
        shader.setUniform('uLightSpecular', this.specular.toArray());
    }
    update() {
        this.isDirty = true;
    }
    destroy() {
        this.position.destroy();
        this.ambient.destroy();
        this.diffuse.destroy();
        this.specular.destroy();
    }
}

export { Light };
