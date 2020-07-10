import '../../../math/pow2/IsSizePowerOfTwo.js';
import '../../../config/const.js';
import '../../../config/ConfigStore.js';
import '../../../config/size/GetHeight.js';
import '../../../config/size/GetResolution.js';
import '../../../config/size/GetWidth.js';
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

class AmbientLightShader extends Shader {
    constructor() {
        super();
        const tempMat4 = new Float32Array(16).fill(0);
        const tempVec3 = [0, 0, 0];
        const config = {
            fragmentShader: AMBIENT_LIGHT_FRAG,
            vertexShader: AMBIENT_LIGHT_VERT,
            attributes: {
                aVertexPosition: { size: 3, type: FLOAT, normalized: false, offset: 0 },
                aVertexNormal: { size: 3, type: FLOAT, normalized: false, offset: 12 },
                aTextureCoord: { size: 2, type: FLOAT, normalized: false, offset: 24 }
            },
            uniforms: {
                uViewProjectionMatrix: tempMat4,
                uNormalMatrix: tempMat4,
                uModelMatrix: tempMat4,
                uCameraPosition: tempVec3,
                uTexture: 0,
                uLightPosition: tempVec3,
                uLightAmbient: tempVec3,
                uLightDiffuse: tempVec3,
                uLightSpecular: tempVec3,
                uMaterialAmbient: tempVec3,
                uMaterialDiffuse: tempVec3,
                uMaterialSpecular: tempVec3,
                uMaterialShine: 0
            }
        };
        this.fromConfig(config);
    }
}

export { AmbientLightShader };
