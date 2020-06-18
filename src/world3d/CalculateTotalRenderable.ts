import { IWorld3DRenderData } from './IWorld3DRenderData';
import { SearchEntry3D } from '../display3d/DepthFirstSearchRecursiveNested3D';

export function CalculateTotalRenderable (entry: SearchEntry3D, renderData: IWorld3DRenderData): void
{
    renderData.numRendered++;
    renderData.numRenderable++;

    if (entry.node.dirtyFrame >= renderData.gameFrame)
    {
        renderData.dirtyFrame++;
    }

    entry.children.forEach(child =>
    {
        if (child.children.length > 0)
        {
            CalculateTotalRenderable(child, renderData);
        }
    });
}
