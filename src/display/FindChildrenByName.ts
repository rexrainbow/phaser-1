import { DepthFirstSearch } from './DepthFirstSearch';
import { IGameObject } from '../gameobjects/IGameObject';

export function FindChildrenByName (parent: IGameObject, searchString: string): IGameObject[]
{
    const children = DepthFirstSearch(parent);
    const regex = RegExp(searchString);

    const results: IGameObject[] = [];

    children.forEach(child =>
    {
        if (regex.test(child.name))
        {
            results.push(child);
        }
    });

    return results;
}
