import { BlendModeStackEntry, FramebufferStackEntry, ShaderStackEntry } from './RenderPass';

import { IShader } from '../shaders/IShader';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { Rectangle } from '../../../geom/rectangle/Rectangle';

export interface IRenderPass
{
    renderer: IWebGLRenderer;
    projectionMatrix: Float32Array;
    cameraMatrix: Float32Array;

    count: number;
    prevCount: number;
    flushTotal: number;

    //  The maximum number of combined image units the GPU supports
    //  According to the WebGL spec the minimum is 8
    maxTextures: number;
    currentActiveTexture: number;
    startActiveTexture: number;
    tempTextures: WebGLTexture[];
    textureIndex: number[];

    //  FBO
    framebufferStack: FramebufferStackEntry[];
    currentFramebuffer: FramebufferStackEntry;
    defaultFramebuffer: FramebufferStackEntry;

    //  VBO
    vertexBufferStack: IVertexBuffer[];
    currentVertexBuffer: IVertexBuffer;
    defaultVertexBuffer: IVertexBuffer;

    //  Shader
    shaderStack: ShaderStackEntry[];
    currentShader: ShaderStackEntry;
    defaultShader: ShaderStackEntry;

    //  Viewport
    viewportStack: Rectangle[];
    currentViewport: Rectangle;
    defaultViewport: Rectangle;

    //  Blend Mode
    blendModeStack: BlendModeStackEntry[];
    currentBlendMode: BlendModeStackEntry;
    defaultBlendMode: BlendModeStackEntry;

    quadShader: IShader;
    quadBuffer: IVertexBuffer;
}
