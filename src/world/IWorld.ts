import { ICamera } from '../camera/ICamera';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldRenderData } from './IWorldRenderData';

export interface IWorld
{
    willRender: boolean;
    willUpdate: boolean;
    camera: ICamera;
    renderData: IWorldRenderData;
    children: IGameObject[];
    forceRefresh: boolean;
    update (delta?: number, time?: number): void;
    render (renderData: ISceneRenderData): void;
    shutdown (): void;
    destroy(): void;
}
