import { FBOSystem } from './fbo/FBOSystem';
import { IBaseCamera } from '../../camera/IBaseCamera';
import { ISceneRenderData } from '../../scenes/ISceneRenderData';
import { SearchEntry } from '../../display/DepthFirstSearchRecursiveNested';
import { ShaderSystem } from './shaders/ShaderSystem';
import { TextureSystem } from './textures/TextureSystem';
export declare class WebGLRenderer {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;
    fbo: FBOSystem;
    textures: TextureSystem;
    shaders: ShaderSystem;
    clearColor: number[];
    width: number;
    height: number;
    resolution: number;
    projectionMatrix: Float32Array;
    flushTotal: number;
    clearBeforeRender: boolean;
    optimizeRedraw: boolean;
    autoResize: boolean;
    contextLost: boolean;
    currentCamera: IBaseCamera;
    constructor();
    initContext(): void;
    resize(width: number, height: number, resolution?: number): void;
    onContextLost(event: Event): void;
    onContextRestored(): void;
    setBackgroundColor(color: number): this;
    reset(framebuffer?: WebGLFramebuffer, width?: number, height?: number): void;
    render(renderData: ISceneRenderData): void;
    renderNode(entry: SearchEntry): void;
    flush(): void;
    destroy(): void;
}
//# sourceMappingURL=WebGLRenderer.d.ts.map