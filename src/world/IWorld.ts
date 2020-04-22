import { ICamera } from '../camera/ICamera';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { ISprite } from '../gameobjects/sprite/ISprite';

export interface IWorld
{
    camera: ICamera;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    children: IGameObject[];
    rendered: ISprite[];
    forceRefresh: boolean;
    update (delta?: number, time?: number): void;
    render (renderData: ISceneRenderData): void;
    shutdown (): void;
    destroy(): void;
}
