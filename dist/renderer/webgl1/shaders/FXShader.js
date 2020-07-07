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
import './Shader.js';
import { QuadShader } from './QuadShader.js';

class FXShader extends QuadShader {
    constructor(config = {}) {
        const shaderConfig = config;
        shaderConfig.attributes = (!shaderConfig.attributes) ? DefaultQuadAttributes : shaderConfig.attributes;
        shaderConfig.renderToFramebuffer = true;
        super(shaderConfig);
    }
    bind(renderPass) {
        const renderer = renderPass.renderer;
        this.uniforms.set('uTime', performance.now());
        this.uniforms.set('uResolution', [renderer.width, renderer.height]);
        return super.bind(renderPass);
    }
}

export { FXShader };
