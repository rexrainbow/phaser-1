import { IBaseCamera } from '../camera/IBaseCamera';
import { IEventInstance } from '../events/IEventInstance';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldRenderData } from './IWorldRenderData';
import { WorldPluginType } from './WorldPluginType';

export interface IBaseWorld extends IGameObject
{
    scene: IScene;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    plugins: Map<string, WorldPluginType>;
    events: Map<string, Set<IEventInstance>>;
    render (sceneRenderData: ISceneRenderData): void;
    shutdown (): void;
}
