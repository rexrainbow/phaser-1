import { IBaseCamera } from '../camera/IBaseCamera';
import { IEventInstance } from '../events/IEventInstance';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldPlugin } from './IWorldPlugin';
import { IWorldRenderData } from './IWorldRenderData';

export interface IBaseWorld extends IGameObject
{
    scene: IScene;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    plugins: Map<string, IWorldPlugin>;
    events: Map<string, Set<IEventInstance>>;
    render (sceneRenderData: ISceneRenderData): void;
    shutdown (): void;
}
