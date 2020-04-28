import { Clock } from '../time/Clock';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IStaticCamera } from '../camera/IStaticCamera';
import { IWorldRenderData } from './IWorldRenderData';

export interface IWorld extends IGameObject
{
    scene: IScene;
    clock: Clock;
    camera: IStaticCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    render (renderData: ISceneRenderData): void;
    shutdown (): void;
}
