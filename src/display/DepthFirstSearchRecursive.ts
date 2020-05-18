import { IGameObject } from '../gameobjects/IGameObject';

//  Returns all children of the parent, no matter what depth they go to, using a recursive search.
//  Does NOT include the parent in the results.

export function DepthFirstSearchRecursive (parent: IGameObject, output: IGameObject[] = []): IGameObject[]
{
    for (let i = 0; i < parent.numChildren; i++)
    {
        const child = parent.children[i];

        output.push(child);

        if (child.numChildren > 0)
        {
            DepthFirstSearchRecursive(child, output);
        }
    }

    return output;
}
