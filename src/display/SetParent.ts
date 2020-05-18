import { DepthFirstSearch } from './DepthFirstSearch';
import { IGameObject } from '../gameobjects/IGameObject';
import { RemoveChild } from './RemoveChild';
import { SetWorld } from './SetWorld';

export function SetParent (parent: IGameObject, ...children: IGameObject[]): IGameObject[]
{
    const parentWorld = parent.world;

    children.forEach(child =>
    {
        if (child.parent)
        {
            RemoveChild(child.parent, child);
        }

        child.parent = parent;
    });

    //  Full list of all children, including sub-children
    const childrenList = DepthFirstSearch(parent);

    if (parentWorld)
    {
        SetWorld(parentWorld, ...childrenList);
    }

    //  If the parent is not the World, then set it as the root node on all children, all the way down
    if (parent !== parentWorld)
    {
        childrenList.forEach(child =>
        {
            child.root = parent.root;
        });
    }

    return children;
}
