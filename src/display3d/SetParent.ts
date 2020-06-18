import { DepthFirstSearch } from './DepthFirstSearch';
import { IGameObject } from '../gameobjects/IGameObject';
import { RemoveChild } from './RemoveChild';
import { SetWorld } from './SetWorld';

export function SetParent (parent: IGameObject, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        if (child.parent)
        {
            RemoveChild(child.parent, child);
        }

        child.parent = parent;
    });

    const parentWorld = parent.world;

    if (parentWorld)
    {
        //  Full list of all children, including sub-children
        SetWorld(parentWorld, ...DepthFirstSearch(parent));
    }

    return children;
}
