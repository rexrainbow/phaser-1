import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';

export function BringChildToTop (parent: IGameObject, child: IGameObject): IGameObject
{
    const parentChildren = parent.children;

    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex !== -1 && currentIndex < parentChildren.length)
    {
        parentChildren.splice(currentIndex, 1);
        parentChildren.push(child);

        child.dirty.setRender();
    }

    return child;
}
