import { Clock } from '../time/Clock';
import { IBaseCamera } from '../camera/IBaseCamera';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldRenderData } from './IWorldRenderData';

export interface IBaseWorld extends IGameObject
{
    scene: IScene;
    clock: Clock;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    addNode (node: IGameObject, renderData: IWorldRenderData): boolean;
    buildRenderList (renderData: IWorldRenderData): void;
    sceneRender (sceneRenderData: ISceneRenderData): void;
    shutdown (): void;
}
