import '../../../math/pow2/IsSizePowerOfTwo.js';
import '../../../config/Size.js';
import '../../BindingQueue.js';
import { GetMaxTextures } from '../../../config/MaxTextures.js';
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
import './DefaultQuadAttributes.js';
import './DefaultQuadUniforms.js';
import '../fbo/CreateDepthBuffer.js';
import '../fbo/CreateFramebuffer.js';
import '../glsl/SINGLE_QUAD_FRAG.js';
import '../glsl/SINGLE_QUAD_VERT.js';
import '../../../textures/Frame.js';
import '../../../textures/Texture.js';
import './Shader.js';
import { QuadShader } from './QuadShader.js';
import { MULTI_QUAD_FRAG } from '../glsl/MULTI_QUAD_FRAG.js';

class MultiTextureQuadShader extends QuadShader {
    constructor(config = {}) {
        if (!config.fragmentShader) {
            config.fragmentShader = MULTI_QUAD_FRAG;
        }
        super(config);
    }
    create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
        const maxTextures = GetMaxTextures();
        let src = '';
        for (let i = 1; i < maxTextures; i++) {
            if (i > 1) {
                src += '\n\telse ';
            }
            if (i < maxTextures - 1) {
                src += `if (vTextureId < ${i}.5)`;
            }
            src += '\n\t{';
            src += `\n\t\tcolor = texture2D(uTexture[${i}], vTextureCoord);`;
            src += '\n\t}';
        }
        fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);
        fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);
        super.create(fragmentShaderSource, vertexShaderSource, uniforms, attribs);
    }
    bind(renderPass) {
        this.uniforms.set('uTexture', renderPass.textureIndex);
        return super.bind(renderPass);
    }
}

export { MultiTextureQuadShader };
