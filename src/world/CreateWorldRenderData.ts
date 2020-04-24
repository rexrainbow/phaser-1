import { ICamera } from '../camera/ICamera';
import { IStaticCamera } from '../camera/IStaticCamera';
import { IWorldRenderData } from './IWorldRenderData';

export function CreateWorldRenderData (camera: ICamera | IStaticCamera): IWorldRenderData
{
    return {
        camera,
        gameFrame: 0,
        dirtyFrame: 0,
        numRendered: 0,
        numRenderable: 0,
        renderList: []
    };
}
