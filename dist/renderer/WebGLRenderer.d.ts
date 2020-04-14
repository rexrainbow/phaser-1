import MultiTextureQuadShader from './MultiTextureQuadShader';
import Texture from '../textures/Texture';
export default class WebGLRenderer {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;
    contextOptions: WebGLContextAttributes;
    clearColor: number[];
    shader: MultiTextureQuadShader;
    width: number;
    height: number;
    resolution: number;
    projectionMatrix: Float32Array;
    textureIndex: number[];
    flushTotal: number;
    maxTextures: number;
    activeTextures: Texture[];
    currentActiveTexture: number;
    startActiveTexture: number;
    tempTextures: WebGLTexture[];
    clearBeforeRender: boolean;
    optimizeRedraw: boolean;
    autoResize: boolean;
    contextLost: boolean;
    elementIndexExtension: OES_element_index_uint;
    constructor(width: number, height: number, resolution: number);
    initContext(): void;
    resize(width: number, height: number, resolution?: number): void;
    onContextLost(event: any): void;
    onContextRestored(): void;
    setBackgroundColor(color: number): this;
    private getMaxTextures;
    reset(framebuffer?: WebGLFramebuffer, width?: number, height?: number): void;
    render(sceneList: any[], dirtyFrame: number, dirtyCameras: number): void;
    resetTextures(texture?: Texture): void;
    requestTexture(texture: Texture): void;
}
//# sourceMappingURL=WebGLRenderer.d.ts.map