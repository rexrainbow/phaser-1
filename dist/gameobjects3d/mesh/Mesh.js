import '../../GameInstance.js';
import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../../math/mat4/Matrix4.js';
import '../../math/mat4/FromRotationTranslationScale.js';
import '../../math/vec3/Vec3.js';
import '../../math/quaternion/Quaternion.js';
import '../../math/mat4/Invert.js';
import '../../math/mat4/Multiply.js';
import '../../math/mat4/Transpose.js';
import '../../geom/rectangle/RectangleContains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../math/vec3/Backward.js';
import '../../math/vec3/Down.js';
import '../../math/vec3/Forward.js';
import '../../math/vec3/Left.js';
import '../../math/vec3/Right.js';
import '../../math/vec3/Up.js';
import '../../math/vec3/Zero.js';
import '../../math/vec3/const.js';
import '../../math/vec3/Scale.js';
import '../../math/Clamp.js';
import '../../math/vec3/TransformMat4.js';
import '../../math/vec3/Project.js';
import '../../math/vec3/Vec3Callback.js';
import '../../math/vec3/RGBCallback.js';
import '../../math/vec3/Unproject.js';
import '../../math/quaternion/RotateX.js';
import '../../math/quaternion/RotateY.js';
import '../../math/quaternion/RotateZ.js';
import '../../renderer/BindingQueue.js';
import '../../renderer/webgl1/renderpass/AddViewport.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/renderpass/BindViewport.js';
import '../../renderer/webgl1/renderpass/SetViewport.js';
import '../../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../../renderer/webgl1/renderpass/PopViewport.js';
import '../../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../../renderer/webgl1/renderpass/AddFramebuffer.js';
import '../../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../../renderer/webgl1/renderpass/Draw.js';
import '../../renderer/webgl1/renderpass/Flush.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import '../../renderer/webgl1/renderpass/AddVertexBuffer.js';
import '../../renderer/webgl1/renderpass/BindVertexBuffer.js';
import '../../renderer/webgl1/renderpass/PopVertexBuffer.js';
import '../../renderer/webgl1/renderpass/SetVertexBuffer.js';
import { FlushBuffer } from '../../renderer/webgl1/renderpass/FlushBuffer.js';
import { SetTexture as SetTexture$1 } from '../../renderer/webgl1/renderpass/SetTexture.js';
import '../../gameobjects/events/DestroyEvent.js';
import '../../events/Emit.js';
import '../../gameobjects/DIRTY_CONST.js';
import '../../textures/TextureManagerInstance.js';
import '../components/transform3d/Transform3DComponent.js';
import { GameObject3D } from '../GameObject3D.js';
import { Material } from '../material/Material.js';
import { SetFrame } from './SetFrame.js';
import { SetTexture } from './SetTexture.js';

class Mesh extends GameObject3D {
    constructor(x = 0, y = 0, z = 0, geometry, material = new Material()) {
        super(x, y, z);
        this.hasTexture = false;
        this.cullFaces = true;
        this.geometry = geometry;
        this.material = material;
        this.setTexture('__WHITE');
    }
    setTexture(key, frame) {
        SetTexture(key, frame, this);
        return this;
    }
    setFrame(key) {
        SetFrame(this.texture, key, this);
        return this;
    }
    setMaterial(material) {
        this.material = material;
        return this;
    }
    renderGL(renderPass) {
        const shader = renderPass.currentShader.shader;
        shader.setUniform('uModelMatrix', this.transform.local.data);
        shader.setUniform('uNormalMatrix', this.transform.normal.data);
        if (this.hasTexture) {
            const textureIndex = SetTexture$1(renderPass, this.texture);
            shader.setUniform('uTexture', textureIndex);
        }
        this.material.setUniforms(shader);
        FlushBuffer(renderPass, this.geometry.buffer);
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        this.geometry = null;
        this.material = null;
        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
    }
}

export { Mesh };
