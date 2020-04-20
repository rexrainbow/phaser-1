import { IWorldRenderResult } from "../world/World";

export interface ISceneRenderData {
    //  How many Cameras were made dirty this frame across all Scenes?
    numDirtyCameras: number,

    //  How many Game Objects were made dirty this frame across all Scenes?
    numDirtyFrames: number,

    //  How many Game Objects were processed this frame across all Scenes?
    numTotalFrames: number,

    renderedWorlds: IWorldRenderResult[],

    //  How many objects inside the circular array renderList?
    numRenderedWorlds: number
}
