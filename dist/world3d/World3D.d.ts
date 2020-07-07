import { Light, LightConfig } from '../gameobjects3d/light/Light';
import { BaseWorld3D } from './BaseWorld3D';
import { IRenderPass } from '../renderer/webgl1/renderpass/IRenderPass';
import { IScene } from '../scenes/IScene';
import { IShader } from '../renderer/webgl1/shaders/IShader';
import { NewCamera3D } from '../camera3d/NewCamera3D';
export declare class World3D extends BaseWorld3D {
    camera: NewCamera3D;
    light: Light;
    shader: IShader;
    enableCameraCull: boolean;
    constructor(scene: IScene, x?: number, y?: number, z?: number, lightConfig?: LightConfig);
    renderGL<T extends IRenderPass>(renderPass: T): void;
    postRenderGL<T extends IRenderPass>(renderPass: T): void;
}
//# sourceMappingURL=World3D.d.ts.map