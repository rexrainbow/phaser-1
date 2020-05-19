import { IBaseCamera } from '../camera/IBaseCamera';
import { SearchEntry } from '../display/DepthFirstSearchRecursiveNested';

export interface IWorldRenderData
{
    camera: IBaseCamera;
    gameFrame: number;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    renderList: SearchEntry[];
}
