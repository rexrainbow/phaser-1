import { CreateTempTextures } from './CreateTempTextures';
import { GetBatchSize } from '../../../config/batchsize/GetBatchSize';
import { IBaseCamera } from '../../../camera/IBaseCamera';
import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedVertexBuffer } from '../buffers/IndexedVertexBuffer';
import { Matrix4 } from '../../../math/mat4/Matrix4';
import { MultiTextureQuadShader } from '../shaders';
import { Ortho } from '../../../math/mat4/Ortho';
import { QuadShader } from '../shaders/QuadShader';
import { Rectangle } from '../../../geom/rectangle/Rectangle';
import { SetDefaultBlendMode } from './SetDefaultBlendMode';
import { SetDefaultFramebuffer } from './SetDefaultFramebuffer';
import { SetDefaultShader } from './SetDefaultShader';
import { SetDefaultVertexBuffer } from './SetDefaultVertexBuffer';
import { SetDefaultViewport } from './SetDefaultViewport';
import { StaticCamera } from '../../../camera';

export type FramebufferStackEntry = {
    framebuffer: WebGLFramebuffer;
    viewport?: Rectangle;
};

export type ShaderStackEntry = {
    shader: IShader;
    textureID?: number;
};

export type BlendModeStackEntry = {
    enable: boolean;
    sfactor?: number;
    dfactor?: number;
};

export class RenderPass implements IRenderPass
{
    renderer: IWebGLRenderer;

    projectionMatrix: Matrix4;
    cameraMatrix: Matrix4;

    count: number = 0;
    prevCount: number = 0;
    flushTotal: number = 0;

    //  The maximum number of combined image units the GPU supports
    //  According to the WebGL spec the minimum is 8
    maxTextures: number = 0;
    currentActiveTexture: number = 0;
    startActiveTexture: number = 0;
    tempTextures: WebGLTexture[] = [];
    textureIndex: number[] = [];

    //  FBO
    framebufferStack: FramebufferStackEntry[] = [];
    currentFramebuffer: FramebufferStackEntry = null;
    defaultFramebuffer: FramebufferStackEntry = null;

    //  VBO
    vertexBufferStack: IVertexBuffer[] = [];
    currentVertexBuffer: IVertexBuffer = null;
    defaultVertexBuffer: IVertexBuffer = null;

    //  Shader
    shaderStack: ShaderStackEntry[] = [];
    currentShader: ShaderStackEntry = null;
    defaultShader: ShaderStackEntry = null;

    //  Viewport
    viewportStack: Rectangle[] = [];
    currentViewport: Rectangle = null;
    defaultViewport: Rectangle = null;

    //  Blend Mode
    blendModeStack: BlendModeStackEntry[] = [];
    currentBlendMode: BlendModeStackEntry = null;
    defaultBlendMode: BlendModeStackEntry = null;

    //  Single Texture Quad Shader + Camera
    quadShader: IShader;
    quadBuffer: IVertexBuffer;
    quadCamera: IBaseCamera;

    //  Current 2D Camera
    current2DCamera: IBaseCamera;

    constructor (renderer: IWebGLRenderer)
    {
        this.renderer = renderer;

        this.projectionMatrix = new Matrix4();

        this.reset();
    }

    //  TODO - Call when context is lost and restored
    reset (): void
    {
        const gl = this.renderer.gl;

        const indexLayout = [ 0, 1, 2, 2, 3, 0 ];

        //  TODO - If already created, delete shaders / buffers first (i.e. during context loss)

        //  Default QuadShader (for FBO drawing)

        this.quadShader = new QuadShader();
        this.quadBuffer = new IndexedVertexBuffer({ isDynamic: false, indexLayout });
        this.quadCamera = new StaticCamera();

        //  Default settings

        CreateTempTextures(this);

        SetDefaultFramebuffer(this);
        SetDefaultBlendMode(this, true, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        SetDefaultVertexBuffer(this, new IndexedVertexBuffer({ batchSize: GetBatchSize(), indexLayout }));
        SetDefaultShader(this, new MultiTextureQuadShader());
    }

    resize (width: number, height: number): void
    {
        //  TODO - -1 to 1?
        Ortho(0, width, height, 0, -1000, 1000, this.projectionMatrix);

        this.quadCamera.reset();

        SetDefaultViewport(this, 0, 0, width, height);
    }
}
