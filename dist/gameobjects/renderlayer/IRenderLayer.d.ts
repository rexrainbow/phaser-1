import { IGameObject } from '../IGameObject';
import { Texture } from '../../textures/Texture';
export interface IRenderLayer extends IGameObject {
    texture: Texture;
    framebuffer: WebGLFramebuffer;
}
//# sourceMappingURL=IRenderLayer.d.ts.map