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
import { FLOAT } from '../GL_CONST.js';
import './DefaultQuadAttributes.js';
import './DefaultQuadUniforms.js';
import '../fbo/CreateDepthBuffer.js';
import '../fbo/CreateFramebuffer.js';
import '../glsl/SINGLE_QUAD_FRAG.js';
import '../glsl/SINGLE_QUAD_VERT.js';
import '../../../textures/Frame.js';
import '../../../textures/Texture.js';
import { Shader } from './Shader.js';
import { AMBIENT_LIGHT_FRAG } from '../glsl/AMBIENT_LIGHT_FRAG.js';
import { AMBIENT_LIGHT_VERT } from '../glsl/AMBIENT_LIGHT_VERT.js';

class GoraudLambertShader extends Shader {
    constructor() {
        super();
        const config = {
            fragmentShader: AMBIENT_LIGHT_FRAG,
            vertexShader: AMBIENT_LIGHT_VERT,
            attributes: {
                aVertexPosition: { size: 3, type: FLOAT, normalized: false, offset: 0 },
                aVertexNormal: { size: 3, type: FLOAT, normalized: false, offset: 12 },
                aTextureCoord: { size: 2, type: FLOAT, normalized: false, offset: 24 }
            },
            uniforms: {
                uViewProjectionMatrix: new Float32Array(16),
                uNormalMatrix: new Float32Array(16),
                uModelMatrix: new Float32Array(16).fill(0),
                uTexture: 0,
                uLightColor: [1.0, 1.0, 1.0],
                uLightDirection: [0.5, 3.0, 4.0],
                uLightAmbient: [0.2, 0.2, 0.2]
            }
        };
        this.fromConfig(config);
    }
}

export { GoraudLambertShader };
