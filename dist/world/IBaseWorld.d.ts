import { IBaseCamera } from '../camera/IBaseCamera';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldRenderData } from './IWorldRenderData';
export interface IBaseWorld extends IGameObject {
    scene: IScene;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    render(sceneRenderData: ISceneRenderData): void;
    shutdown(): void;
}
//# sourceMappingURL=IBaseWorld.d.ts.map