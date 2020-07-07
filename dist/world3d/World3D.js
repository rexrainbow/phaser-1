import '../GameInstance.js';
import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/mat4/Matrix4.js';
import '../math/mat4/FromRotationTranslationScale.js';
import '../math/mat4/FromRotationXYTranslation.js';
import '../math/vec3/Vec3.js';
import '../math/quaternion/Quaternion.js';
import '../math/mat4/Invert.js';
import '../math/mat4/Multiply.js';
import '../math/mat4/Perspective.js';
import '../math/mat4/Transpose.js';
import '../geom/rectangle/Contains.js';
import '../geom/rectangle/Rectangle.js';
import '../math/const.js';
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
import '../math/vec3/ScaleAndAdd.js';
import '../math/vec3/TransformMat4Zero.js';
import '../math/vec3/Unproject.js';
import '../math/quaternion/RotationYawPitchRoll.js';
import '../math/quaternion/RotateX.js';
import '../math/quaternion/RotateY.js';
import '../math/quaternion/RotateZ.js';
import '../math/pow2/IsSizePowerOfTwo.js';
import '../math/DegToRad.js';
import { NewCamera3D } from '../camera3d/NewCamera3D.js';
import '../config/Size.js';
import '../renderer/BindingQueue.js';
import '../renderer/webgl1/renderpass/AddViewport.js';
import '../renderer/webgl1/GL.js';
import '../renderer/webgl1/renderpass/BindViewport.js';
import '../renderer/webgl1/renderpass/SetViewport.js';
import '../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../renderer/webgl1/renderpass/PopViewport.js';
import '../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../renderer/webgl1/renderpass/AddFramebuffer.js';
import '../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../renderer/webgl1/renderpass/Draw.js';
import { Flush } from '../renderer/webgl1/renderpass/Flush.js';
import '../renderer/webgl1/textures/CreateGLTexture.js';
import '../renderer/webgl1/fbo/DeleteFramebuffer.js';
import '../renderer/webgl1/textures/DeleteGLTexture.js';
import '../renderer/webgl1/textures/SetGLTextureFilterMode.js';
import '../renderer/webgl1/textures/UpdateGLTexture.js';
import '../renderer/webgl1/textures/GLTextureBinding.js';
import '../renderer/webgl1/shaders/CreateAttributes.js';
import '../renderer/webgl1/shaders/DeleteShaders.js';
import '../renderer/webgl1/shaders/CreateProgram.js';
import '../renderer/webgl1/shaders/CreateShader.js';
import '../renderer/webgl1/shaders/CreateUniformSetter.js';
import '../renderer/webgl1/shaders/CreateUniforms.js';
import '../renderer/webgl1/GL_CONST.js';
import '../renderer/webgl1/shaders/DefaultQuadAttributes.js';
import '../renderer/webgl1/shaders/DefaultQuadUniforms.js';
import '../renderer/webgl1/fbo/CreateDepthBuffer.js';
import '../renderer/webgl1/fbo/CreateFramebuffer.js';
import '../renderer/webgl1/glsl/SINGLE_QUAD_FRAG.js';
import '../renderer/webgl1/glsl/SINGLE_QUAD_VERT.js';
import '../textures/Frame.js';
import '../textures/Texture.js';
import '../renderer/webgl1/shaders/Shader.js';
import '../renderer/webgl1/renderpass/AddShader.js';
import '../renderer/webgl1/renderpass/BindShader.js';
import { PopShader } from '../renderer/webgl1/renderpass/PopShader.js';
import { SetShader } from '../renderer/webgl1/renderpass/SetShader.js';
import '../gameobjects/events/DestroyEvent.js';
import '../gameobjects/events/PostUpdateEvent.js';
import '../gameobjects/events/UpdateEvent.js';
import '../events/Emit.js';
import '../gameobjects/DIRTY_CONST.js';
import '../display3d/GetChild3DIndex.js';
import '../display3d/RemoveChild3DAt.js';
import '../display3d/RemoveChild3D.js';
import '../display3d/RemoveChildren3D.js';
import '../events/EventInstance.js';
import '../events/Off.js';
import '../events/On.js';
import '../events/Once.js';
import '../gameobjects3d/components/transform3d/Transform3DComponent.js';
import '../gameobjects3d/GameObject3D.js';
import { Light } from '../gameobjects3d/light/Light.js';
import './events/World3DRenderEvent.js';
import './events/World3DShutdownEvent.js';
import './CalculateTotalRenderable.js';
import './HasDirtyChildren.js';
import './UpdateCachedLayers.js';
import './WorldDepthFirstSearch.js';
import './BuildRenderList.js';
import './MergeRenderData.js';
import './ResetWorld3DRenderData.js';
import { BaseWorld3D } from './BaseWorld3D.js';
import { CreateWorld3DRenderData } from './CreateWorld3DRenderData.js';
import '../renderer/webgl1/glsl/AMBIENT_LIGHT_FRAG.js';
import '../renderer/webgl1/glsl/AMBIENT_LIGHT_VERT.js';
import { AmbientLightShader } from '../renderer/webgl1/shaders/AmbientLightShader.js';

class World3D extends BaseWorld3D {
    constructor(scene, x = 0, y = 0, z = 0, lightConfig) {
        super(scene);
        this.enableCameraCull = true;
        this.type = 'World3D';
        this.camera = new NewCamera3D();
        this.camera.position.set(x, y, z);
        this.light = new Light(lightConfig);
        this.shader = new AmbientLightShader();
        this.renderData = CreateWorld3DRenderData(this, this.camera);
    }
    renderGL(renderPass) {
        Flush(renderPass);
        const shader = this.shader;
        const camera = this.camera;
        const gl = renderPass.renderer.gl;
        SetShader(renderPass, shader, 0);
        shader.setUniform('uViewProjectionMatrix', camera.viewProjectionMatrix.data);
        shader.setUniform('uCameraPosition', camera.position.toArray());
        this.light.setUniforms(shader);
        gl.enable(gl.DEPTH_TEST);
        this.renderList.forEach(entry => {
            if (entry.children.length > 0) {
                this.renderNode(entry, renderPass);
            }
            else {
                entry.node.renderGL(renderPass);
            }
        });
    }
    postRenderGL(renderPass) {
        const gl = renderPass.renderer.gl;
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        PopShader(renderPass);
    }
}

export { World3D };
