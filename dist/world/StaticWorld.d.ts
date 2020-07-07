import { BaseWorld } from './BaseWorld';
import { IScene } from '../scenes/IScene';
import { IStaticCamera } from '../camera/IStaticCamera';
import { IStaticWorld } from './IStaticWorld';
export declare class StaticWorld extends BaseWorld implements IStaticWorld {
    camera: IStaticCamera;
    constructor(scene: IScene);
}
//# sourceMappingURL=StaticWorld.d.ts.map