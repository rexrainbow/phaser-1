import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function RemoveChild (parent: IParent, child: IGameObject): IGameObject
{
    const children = parent.children;

    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex > -1)
    {
        children.splice(currentIndex, 1);

        child.parent = null;
    }

    return child;
}
