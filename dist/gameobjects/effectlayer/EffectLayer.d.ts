import { IEffectLayer } from './IEffectLayer';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { IWebGLRenderer } from '../../renderer/webgl1/IWebGLRenderer';
import { RenderLayer } from '../renderlayer/RenderLayer';
export declare class EffectLayer extends RenderLayer implements IEffectLayer {
    shaders: IShader[];
    constructor();
    postRenderGL<T extends IWebGLRenderer>(renderer: T): void;
}
//# sourceMappingURL=EffectLayer.d.ts.map