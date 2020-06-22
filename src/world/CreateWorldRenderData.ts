import { IBaseCamera } from '../camera/IBaseCamera';
import { IBaseWorld } from './IBaseWorld';
import { IWorldRenderData } from './IWorldRenderData';

export function CreateWorldRenderData (world: IBaseWorld, camera: IBaseCamera): IWorldRenderData
{
    return {
        world,
        camera,
        gameFrame: 0,
        dirtyFrame: 0,
        numRendered: 0,
        numRenderable: 0
    };
}
