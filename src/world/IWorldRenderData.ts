import { IGameObject } from '../gameobjects/IGameObject';
import { IStaticCamera } from '../camera/IStaticCamera';

export interface IWorldRenderData
{
    camera: IStaticCamera;
    gameFrame: number;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    renderList: IGameObject[];
}
