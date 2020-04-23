import { ICamera } from '../camera/ICamera';
import { ISprite } from '../gameobjects/sprite/ISprite';

export interface IWorldRenderData
{
    camera: ICamera;
    gameFrame: number;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    renderList: ISprite[];
}
