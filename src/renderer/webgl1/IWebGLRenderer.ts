import { IBaseCamera } from '../../camera/IBaseCamera';
import { IMatrix4 } from '../../math/mat4/IMatrix4';
import { IRenderPass } from './renderpass/IRenderPass';
import { IRenderer } from '../IRenderer';
import { SearchEntry } from '../../display/DepthFirstSearchRecursiveNested';

export interface IWebGLRenderer extends IRenderer
{
    gl: WebGLRenderingContext;

    renderPass: IRenderPass;

    projectionMatrix: IMatrix4;
    contextLost: boolean;
    currentCamera: IBaseCamera;

    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (): void;
    renderNode (entry: SearchEntry, renderPass: IRenderPass): void;
}
