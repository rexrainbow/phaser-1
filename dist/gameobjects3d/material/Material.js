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
import { Clamp } from '../../math/Clamp.js';
import '../../math/vec3/TransformMat4.js';
import '../../math/vec3/Project.js';
import '../../math/vec3/Vec3Callback.js';
import { RGBCallback } from '../../math/vec3/RGBCallback.js';
import '../../math/vec3/Unproject.js';

class Material {
    constructor(config = {}) {
        this.isDirty = false;
        const { ambient = [1, 1, 1], diffuse = [1, 1, 1], specular = [1, 1, 1], shine = 0.25 } = config;
        const onChange = () => this.update();
        this.ambient = new RGBCallback(onChange).fromArray(ambient);
        this.diffuse = new RGBCallback(onChange).fromArray(diffuse);
        this.specular = new RGBCallback(onChange).fromArray(specular);
        this._shine = shine;
    }
    get shine() {
        return this._shine;
    }
    set shine(value) {
        this._shine = Clamp(value, 0, 1);
        this.isDirty = true;
    }
    update() {
        this.isDirty = true;
    }
    setUniforms(shader) {
        shader.setUniform('uMaterialAmbient', this.ambient.toArray());
        shader.setUniform('uMaterialDiffuse', this.diffuse.toArray());
        shader.setUniform('uMaterialSpecular', this.specular.toArray());
        shader.setUniform('uMaterialShine', this._shine * 256);
    }
    destroy() {
        this.ambient.destroy();
        this.diffuse.destroy();
        this.specular.destroy();
    }
}

export { Material };
