import { IWorld3DRenderData } from '../world3d/IWorld3DRenderData';
import { IWorldRenderData } from '../world/IWorldRenderData';
export interface ISceneRenderData {
    gameFrame: number;
    numDirtyCameras: number;
    numDirtyFrames: number;
    numTotalFrames: number;
    worldData: (IWorldRenderData | IWorld3DRenderData)[];
}
//# sourceMappingURL=ISceneRenderData.d.ts.map