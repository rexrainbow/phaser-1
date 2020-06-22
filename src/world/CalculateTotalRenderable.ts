import { IWorldRenderData } from './IWorldRenderData';
import { SearchEntry } from '../display/SearchEntryType';

export function CalculateTotalRenderable (entry: SearchEntry, renderData: IWorldRenderData): void
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
