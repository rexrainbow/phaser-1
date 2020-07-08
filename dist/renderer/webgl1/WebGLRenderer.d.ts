import { IRenderPass } from './renderpass/IRenderPass';
import { ISceneRenderData } from '../../scenes/ISceneRenderData';
export declare class WebGLRenderer {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;
    renderPass: IRenderPass;
    clearColor: number[];
    width: number;
    height: number;
    resolution: number;
    clearBeforeRender: boolean;
    optimizeRedraw: boolean;
    autoResize: boolean;
    contextLost: boolean;
    constructor();
    initContext(): void;
    resize(width: number, height: number, resolution?: number): void;
    onContextLost(event: Event): void;
    onContextRestored(): void;
    setBackgroundColor(color: number): this;
    reset(): void;
    render(renderData: ISceneRenderData): void;
    destroy(): void;
}
//# sourceMappingURL=WebGLRenderer.d.ts.map