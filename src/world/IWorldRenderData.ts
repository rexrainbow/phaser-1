import { IBaseCamera } from '../camera/IBaseCamera';
import { IBaseWorld } from './IBaseWorld';
import { SearchEntry } from '../display/DepthFirstSearchRecursiveNested';

export interface IWorldRenderData
{
    world: IBaseWorld;
    camera: IBaseCamera;
    gameFrame: number;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    renderList: SearchEntry[];
}
