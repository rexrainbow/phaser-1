import { ICamera } from '../camera/ICamera';
import { IGameObject } from '../gameobjects/IGameObject';

export interface IWorldRenderData
{
    camera: ICamera;
    gameFrame: number;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    renderList: IGameObject[];
}
