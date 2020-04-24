import { ICamera } from '../camera/ICamera';
import { ISprite } from '../gameobjects/sprite/ISprite';
import { IStaticCamera } from '../camera/IStaticCamera';

export interface IWorldRenderData
{
    camera: ICamera | IStaticCamera;
    gameFrame: number;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    renderList: ISprite[];
}
