import { IRenderLayer3D } from './IRenderLayer3D';
import { IRenderPass } from '../../renderer/webgl1/renderpass/IRenderPass';
import { Layer } from '../../gameobjects/layer/Layer';
import { Texture } from '../../textures/Texture';
export declare class RenderLayer3D extends Layer implements IRenderLayer3D {
    texture: Texture;
    framebuffer: WebGLFramebuffer;
    constructor();
    renderGL<T extends IRenderPass>(renderPass: T): void;
    postRenderGL<T extends IRenderPass>(renderPass: T): void;
}
//# sourceMappingURL=RenderLayer3D.d.ts.map