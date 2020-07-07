import '../../../math/pow2/IsSizePowerOfTwo.js';
import '../../../config/Size.js';
import '../../BindingQueue.js';
import '../GL.js';
import '../textures/CreateGLTexture.js';
import '../fbo/DeleteFramebuffer.js';
import '../textures/DeleteGLTexture.js';
import '../textures/SetGLTextureFilterMode.js';
import '../textures/UpdateGLTexture.js';
import '../textures/GLTextureBinding.js';
import './CreateAttributes.js';
import './DeleteShaders.js';
import './CreateProgram.js';
import './CreateShader.js';
import './CreateUniformSetter.js';
import './CreateUniforms.js';
import '../GL_CONST.js';
import { DefaultQuadAttributes } from './DefaultQuadAttributes.js';
import './DefaultQuadUniforms.js';
import '../fbo/CreateDepthBuffer.js';
import '../fbo/CreateFramebuffer.js';
import '../glsl/SINGLE_QUAD_FRAG.js';
import '../glsl/SINGLE_QUAD_VERT.js';
import '../../../textures/Frame.js';
import '../../../textures/Texture.js';
import { Shader } from './Shader.js';

class QuadShader extends Shader {
    constructor(config = {}) {
        const shaderConfig = config;
        shaderConfig.attributes = (!shaderConfig.attributes) ? DefaultQuadAttributes : shaderConfig.attributes;
        super(shaderConfig);
    }
    bind(renderPass) {
        const uniforms = this.uniforms;
        uniforms.set('uProjectionMatrix', renderPass.projectionMatrix.data);
        uniforms.set('uCameraMatrix', renderPass.cameraMatrix.data);
        return super.bind(renderPass);
    }
}

export { QuadShader };
