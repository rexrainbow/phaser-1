import { IGameObject } from '../gameobjects/IGameObject';
import { RemoveChild } from './RemoveChild';

export function SetParent <T extends IGameObject> (parent: IGameObject, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        if (child.parent)
        {
            RemoveChild(child.parent, child);
        }

        child.world = parent.world;
        child.parent = parent;
    });

    return children;
}
