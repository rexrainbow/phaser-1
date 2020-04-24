import { Clock } from '../time/Clock';
import { ICamera } from '../camera/ICamera';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IStaticCamera } from '../camera/IStaticCamera';
import { IWorldRenderData } from './IWorldRenderData';

export interface IWorld
{
    world: IWorld;
    scene: IScene;
    clock: Clock;
    willRender: boolean;
    willUpdate: boolean;
    camera: ICamera | IStaticCamera;
    renderData: IWorldRenderData;
    children: IGameObject[];
    forceRefresh: boolean;
    update (delta?: number, time?: number): void;
    render (renderData: ISceneRenderData): void;
    shutdown (): void;
    destroy(): void;
}
