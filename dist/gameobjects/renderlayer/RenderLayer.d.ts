import { IRenderLayer } from './IRenderLayer';
import { IWebGLRenderer } from '../../renderer/webgl1/IWebGLRenderer';
import { Layer } from '../layer/Layer';
import { Texture } from '../../textures/Texture';
export declare class RenderLayer extends Layer implements IRenderLayer {
    texture: Texture;
    framebuffer: WebGLFramebuffer;
    constructor();
    renderGL<T extends IWebGLRenderer>(renderer: T): void;
    postRender<T extends IWebGLRenderer>(renderer: T): void;
}
//# sourceMappingURL=RenderLayer.d.ts.map