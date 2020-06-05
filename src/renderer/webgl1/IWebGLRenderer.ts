import { IBaseCamera } from '../../camera/IBaseCamera';
import { IRenderPass } from './renderpass/IRenderPass';
import { IRenderer } from '../IRenderer';
import { SearchEntry } from '../../display/DepthFirstSearchRecursiveNested';

export interface IWebGLRenderer extends IRenderer
{
    gl: WebGLRenderingContext;

    renderPass: IRenderPass;

    projectionMatrix: Float32Array;
    contextLost: boolean;
    currentCamera: IBaseCamera;

    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (): void;
    renderNode (entry: SearchEntry, renderPass: IRenderPass): void;
}
