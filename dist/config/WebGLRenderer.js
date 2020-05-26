import './BackgroundColor.js';
import './Size.js';
import '../renderer/BindingQueue.js';
import { SetRenderer } from './SetRenderer.js';
import './MaxTextures.js';
import './WebGLContext.js';
import '../renderer/webgl1/fbo/FBOSystem.js';
import '../renderer/webgl1/GL.js';
import '../renderer/webgl1/colors/GetRGBArray.js';
import '../math/matrix2d-funcs/ExactEquals.js';
import '../renderer/webgl1/fbo/CreateFramebuffer.js';
import '../renderer/webgl1/textures/CreateGLTexture.js';
import '../renderer/webgl1/fbo/DeleteFramebuffer.js';
import '../renderer/webgl1/textures/DeleteGLTexture.js';
import '../math/pow2/IsSizePowerOfTwo.js';
import '../renderer/webgl1/textures/SetGLTextureFilterMode.js';
import '../renderer/webgl1/textures/UpdateGLTexture.js';
import '../renderer/webgl1/textures/GLTextureBinding.js';
import '../renderer/webgl1/buffers/IndexedBuffer.js';
import '../textures/Frame.js';
import '../textures/Texture.js';
import '../renderer/webgl1/WebGLRendererInstance.js';
import '../renderer/webgl1/shaders/SingleTextureQuadShader.js';
import '../renderer/webgl1/shaders/MultiTextureQuadShader.js';
import '../renderer/webgl1/cameras/Ortho.js';
import '../renderer/webgl1/shaders/ShaderSystem.js';
import '../renderer/webgl1/shaders/CheckShaderMaxIfStatements.js';
import '../renderer/webgl1/textures/TextureSystem.js';
import { WebGLRenderer as WebGLRenderer$1 } from '../renderer/webgl1/WebGLRenderer.js';

function WebGLRenderer() {
    return () => {
        SetRenderer(WebGLRenderer$1);
    };
}

export { WebGLRenderer };
