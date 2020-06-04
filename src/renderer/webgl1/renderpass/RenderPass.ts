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

export class RenderPass implements IRenderPass
{
    renderer: IWebGLRenderer;
    count: number = 0;
    prevCount: number = 0;
    flushTotal: number;

    //  The maximum number of combined image units the GPU supports
    //  According to the WebGL spec the minimum is 8
    maxTextures: number = 0;
    currentActiveTexture: number;
    startActiveTexture: number = 0;
    tempTextures: WebGLTexture[];
    textureIndex: number[];

    //  FBO
    framebufferStack: FramebufferStackEntry[] = [];
    currentFramebuffer: FramebufferStackEntry = null;

    //  VBO
    vertexBufferStack: IVertexBuffer[] = [];
    currentVertexBuffer: IVertexBuffer = null;

    //  Shader
    shaderStack: ShaderStackEntry[] = [];
    currentShader: ShaderStackEntry = null;

    //  Viewport
    viewportStack: Rectangle[] = [];
    currentViewport: Rectangle;

    constructor (renderer: IWebGLRenderer)
    {
        this.renderer = renderer;

        // this.currentViewport = new Rectangle(0, 0, renderer.width, renderer.height);
    }
}
