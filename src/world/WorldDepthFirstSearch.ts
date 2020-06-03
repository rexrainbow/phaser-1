import { IGameObject } from '../gameobjects/IGameObject';
import { SearchEntry } from '../display/DepthFirstSearchRecursiveNested';

export function WorldDepthFirstSearch (cachedLayers: SearchEntry[], parent: IGameObject, output: SearchEntry[] = []): SearchEntry[]
{
    for (let i = 0; i < parent.numChildren; i++)
    {
        const node = parent.children[i];

        console.log(node.name, node.isRenderable());

        if (node.isRenderable())
        {
            const children: SearchEntry[] = [];

            const entry = { node, children };

            output.push(entry);

            if (node.willRenderChildren && node.numChildren > 0)
            {
                if (node.willCacheChildren)
                {
                    cachedLayers.push(entry);
                }

                WorldDepthFirstSearch(cachedLayers, node, children);
            }
        }
    }

    return output;
}
