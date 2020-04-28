import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';

export function RemoveChild (parent: IGameObject, child: IGameObject): IGameObject
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
