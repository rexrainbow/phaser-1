import { IMatrix4 } from '../../math/mat4/IMatrix4';
import { IRenderPass } from './renderpass/IRenderPass';
import { IRenderer } from '../IRenderer';

export interface IWebGLRenderer extends IRenderer
{
    gl: WebGLRenderingContext;

    renderPass: IRenderPass;

    projectionMatrix: IMatrix4;
    contextLost: boolean;

    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (): void;
}
