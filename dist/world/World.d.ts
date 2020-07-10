import { BaseWorld } from './BaseWorld';
import { ICamera } from '../camera/ICamera';
import { IScene } from '../scenes/IScene';
import { IWorld } from './IWorld';
export declare class World extends BaseWorld implements IWorld {
    camera: ICamera;
    enableCameraCull: boolean;
    constructor(scene: IScene);
}
//# sourceMappingURL=World.d.ts.map