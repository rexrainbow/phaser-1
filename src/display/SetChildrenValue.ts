import { DepthFirstSearch } from './DepthFirstSearch';
import { IGameObject } from '../gameobjects/IGameObject';

export function SetChildrenValue (parent: IGameObject, property: string | symbol, value: never): IGameObject[]
{
    const children = DepthFirstSearch(parent);

    children.forEach(child =>
    {
        const descriptor = Object.getOwnPropertyDescriptor(child, property);

        if (descriptor)
        {
            descriptor.set(value);
        }
    });

    return children;
}
