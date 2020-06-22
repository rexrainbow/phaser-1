import { IBaseCamera } from '../camera/IBaseCamera';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldRenderData } from './IWorldRenderData';
import { SearchEntry } from '../display/SearchEntryType';

export interface IBaseWorld extends IGameObject
{
    scene: IScene;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    is3D: boolean;
    renderList: SearchEntry[];
    render (sceneRenderData: ISceneRenderData): void;
    shutdown (): void;
}
