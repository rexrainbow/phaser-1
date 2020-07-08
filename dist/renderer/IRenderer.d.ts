import { ISceneRenderData } from '../scenes/ISceneRenderData';
export interface IRenderer {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    resolution: number;
    clearBeforeRender: boolean;
    optimizeRedraw: boolean;
    autoResize: boolean;
    initContext(): void;
    resize(width: number, height: number, resolution?: number): void;
    setBackgroundColor(color: number): this;
    render(renderData: ISceneRenderData): void;
    destroy(): void;
}
//# sourceMappingURL=IRenderer.d.ts.map