import { DepthFirstSearch } from './DepthFirstSearch';
import { IGameObject } from '../gameobjects/IGameObject';

export function GetAllChildren (parent: IGameObject, property?: string | symbol, value?: never): IGameObject[]
{
    const children = DepthFirstSearch(parent);

    //  Fast path out of here
    if (!property)
    {
        return children;
    }

    const results: IGameObject[] = [];

    children.forEach(child =>
    {
        const descriptor = Object.getOwnPropertyDescriptor(child, property);

        if (descriptor && (value === undefined || value === descriptor.value))
        {
            results.push(child);
        }
    });

    return results;
}
