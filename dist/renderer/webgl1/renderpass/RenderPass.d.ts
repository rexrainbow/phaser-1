import { IBaseCamera } from '../../../camera/IBaseCamera';
import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { Matrix4 } from '../../../math/mat4/Matrix4';
import { Rectangle } from '../../../geom/rectangle/Rectangle';
export declare type FramebufferStackEntry = {
    framebuffer: WebGLFramebuffer;
    viewport?: Rectangle;
};
export declare type ShaderStackEntry = {
    shader: IShader;
    textureID?: number;
};
export declare type BlendModeStackEntry = {
    enable: boolean;
    sfactor?: number;
    dfactor?: number;
};
export declare class RenderPass implements IRenderPass {
    renderer: IWebGLRenderer;
    projectionMatrix: Matrix4;
    cameraMatrix: Matrix4;
    count: number;
    prevCount: number;
    flushTotal: number;
    maxTextures: number;
    currentActiveTexture: number;
    startActiveTexture: number;
    tempTextures: WebGLTexture[];
    textureIndex: number[];
    framebufferStack: FramebufferStackEntry[];
    currentFramebuffer: FramebufferStackEntry;
    defaultFramebuffer: FramebufferStackEntry;
    vertexBufferStack: IVertexBuffer[];
    currentVertexBuffer: IVertexBuffer;
    defaultVertexBuffer: IVertexBuffer;
    shaderStack: ShaderStackEntry[];
    currentShader: ShaderStackEntry;
    defaultShader: ShaderStackEntry;
    viewportStack: Rectangle[];
    currentViewport: Rectangle;
    defaultViewport: Rectangle;
    blendModeStack: BlendModeStackEntry[];
    currentBlendMode: BlendModeStackEntry;
    defaultBlendMode: BlendModeStackEntry;
    quadShader: IShader;
    quadBuffer: IVertexBuffer;
    quadCamera: IBaseCamera;
    current2DCamera: IBaseCamera;
    constructor(renderer: IWebGLRenderer);
    reset(): void;
    resize(width: number, height: number): void;
}
//# sourceMappingURL=RenderPass.d.ts.map