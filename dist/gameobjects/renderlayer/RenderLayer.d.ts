import { IRenderLayer } from './IRenderLayer';
import { IRenderPass } from '../../renderer/webgl1/renderpass/IRenderPass';
import { Layer } from '../layer/Layer';
import { Texture } from '../../textures/Texture';
export declare class RenderLayer extends Layer implements IRenderLayer {
    texture: Texture;
    framebuffer: WebGLFramebuffer;
    constructor();
    renderGL<T extends IRenderPass>(renderPass: T): void;
    postRenderGL<T extends IRenderPass>(renderPass: T): void;
}
//# sourceMappingURL=RenderLayer.d.ts.map