import { ICamera } from '../camera/ICamera';
import { IWorldRenderData } from './IWorldRenderData';

export function CreateWorldRenderData (camera: ICamera): IWorldRenderData
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
