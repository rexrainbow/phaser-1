import { IGameObject } from '../../gameobjects/IGameObject';
import { Texture } from '../../textures/Texture';
export interface IRenderLayer3D extends IGameObject {
    texture: Texture;
    framebuffer: WebGLFramebuffer;
}
//# sourceMappingURL=IRenderLayer3D.d.ts.map