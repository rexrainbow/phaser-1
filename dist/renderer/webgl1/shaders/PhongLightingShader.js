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
import { PHONG_TEXTURE_FRAG } from '../glsl/PHONG_TEXTURE_FRAG.js';
import { PHONG_TEXTURE_VERT } from '../glsl/PHONG_TEXTURE_VERT.js';

class PhongLightingShader extends Shader {
    constructor() {
        super();
        const config = {
            fragmentShader: PHONG_TEXTURE_FRAG,
            vertexShader: PHONG_TEXTURE_VERT,
            attributes: {
                aVertexPosition: { size: 3, type: FLOAT, normalized: false, offset: 0 },
                aVertexNormal: { size: 3, type: FLOAT, normalized: false, offset: 12 },
                aTextureCoord: { size: 2, type: FLOAT, normalized: false, offset: 24 },
                aTextureId: { size: 1, type: FLOAT, normalized: false, offset: 32 }
            },
            uniforms: {
                uProjectionMatrix: new Float32Array(),
                uCameraMatrix: new Float32Array(),
                uNormalMatrix: new Float32Array(),
                uTexture: 0,
                uShininess: 10.10,
                uLightDirection: [0, -1, 1],
                uLightAmbient: [0.75, 0.75, 0.75, 1],
                uLightDiffuse: [0.5, 0.5, 0.5, 1],
                uLightSpecular: [0.4, 0.4, 0.4, 1],
                uMaterialAmbient: [0.2, 0.2, 0.2, 1],
                uMaterialDiffuse: [0.2, 0.2, 0.2, 1],
                uMaterialSpecular: [0.91, 0.91, 0.91, 1]
            }
        };
        this.fromConfig(config);
    }
}

export { PhongLightingShader };
