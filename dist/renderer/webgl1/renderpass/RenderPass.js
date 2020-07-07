import '../../../GameInstance.js';
import '../../../utils/base64/Base64ToArrayBuffer.js';
import '../../../utils/NOOP.js';
import { Matrix4 } from '../../../math/mat4/Matrix4.js';
import '../../../math/mat4/Identity.js';
import { Ortho } from '../../../math/mat4/Ortho.js';
import '../../../math/matrix2d/Matrix2D.js';
import '../../../geom/rectangle/Contains.js';
import '../../../geom/rectangle/Rectangle.js';
import { StaticCamera } from '../../../camera/StaticCamera.js';
import '../../../math/pow2/IsSizePowerOfTwo.js';
import { batchSize } from '../../../config/BatchSize.js';
import '../../../config/Size.js';
import '../../BindingQueue.js';
import '../../../config/MaxTextures.js';
import '../GL.js';
import '../textures/CreateGLTexture.js';
import '../fbo/DeleteFramebuffer.js';
import '../textures/DeleteGLTexture.js';
import '../textures/SetGLTextureFilterMode.js';
import '../textures/UpdateGLTexture.js';
import '../textures/GLTextureBinding.js';
import '../shaders/CheckShaderMaxIfStatements.js';
import { CreateTempTextures } from './CreateTempTextures.js';
import '../buffers/DeleteGLBuffer.js';
import '../buffers/VertexBuffer.js';
import { IndexedVertexBuffer } from '../buffers/IndexedVertexBuffer.js';
import '../shaders/CreateAttributes.js';
import '../shaders/DeleteShaders.js';
import '../shaders/CreateProgram.js';
import '../shaders/CreateShader.js';
import '../shaders/CreateUniformSetter.js';
import '../shaders/CreateUniforms.js';
import '../GL_CONST.js';
import '../shaders/DefaultQuadAttributes.js';
import '../shaders/DefaultQuadUniforms.js';
import '../fbo/CreateDepthBuffer.js';
import '../fbo/CreateFramebuffer.js';
import '../glsl/SINGLE_QUAD_FRAG.js';
import '../glsl/SINGLE_QUAD_VERT.js';
import '../../../textures/Frame.js';
import '../../../textures/Texture.js';
import '../shaders/Shader.js';
import { QuadShader } from '../shaders/QuadShader.js';
import '../glsl/MULTI_QUAD_FRAG.js';
import { MultiTextureQuadShader } from '../shaders/MultiTextureQuadShader.js';
import { SetDefaultBlendMode } from './SetDefaultBlendMode.js';
import { SetDefaultFramebuffer } from './SetDefaultFramebuffer.js';
import { SetDefaultShader } from './SetDefaultShader.js';
import { SetDefaultVertexBuffer } from './SetDefaultVertexBuffer.js';
import { SetDefaultViewport } from './SetDefaultViewport.js';

class RenderPass {
    constructor(renderer) {
        this.count = 0;
        this.prevCount = 0;
        this.flushTotal = 0;
        this.maxTextures = 0;
        this.currentActiveTexture = 0;
        this.startActiveTexture = 0;
        this.tempTextures = [];
        this.textureIndex = [];
        this.framebufferStack = [];
        this.currentFramebuffer = null;
        this.defaultFramebuffer = null;
        this.vertexBufferStack = [];
        this.currentVertexBuffer = null;
        this.defaultVertexBuffer = null;
        this.shaderStack = [];
        this.currentShader = null;
        this.defaultShader = null;
        this.viewportStack = [];
        this.currentViewport = null;
        this.defaultViewport = null;
        this.blendModeStack = [];
        this.currentBlendMode = null;
        this.defaultBlendMode = null;
        this.renderer = renderer;
        this.projectionMatrix = new Matrix4();
        this.reset();
    }
    reset() {
        const gl = this.renderer.gl;
        const indexLayout = [0, 1, 2, 2, 3, 0];
        this.quadShader = new QuadShader();
        this.quadBuffer = new IndexedVertexBuffer({ isDynamic: false, indexLayout });
        this.quadCamera = new StaticCamera();
        CreateTempTextures(this);
        SetDefaultFramebuffer(this);
        SetDefaultBlendMode(this, true, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        SetDefaultVertexBuffer(this, new IndexedVertexBuffer({ batchSize, indexLayout }));
        SetDefaultShader(this, new MultiTextureQuadShader());
    }
    resize(width, height) {
        Ortho(0, width, height, 0, -1000, 1000, this.projectionMatrix);
        this.quadCamera.reset();
        SetDefaultViewport(this, 0, 0, width, height);
    }
}

export { RenderPass };
