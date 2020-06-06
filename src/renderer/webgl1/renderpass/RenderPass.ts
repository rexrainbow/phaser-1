import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { Rectangle } from '../../../geom/rectangle';

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

    projectionMatrix: Float32Array;
    cameraMatrix: Float32Array;

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

    constructor (renderer: IWebGLRenderer)
    {
        this.renderer = renderer;
    }

    //  TODO - Call this START maybe? Only run once, at the start of the render loop, and only reset things that need it
    //  reset needs to: null fbo, default viewport, enable blend, set blendfunc, process binding queue, flushTotal = 0
}
