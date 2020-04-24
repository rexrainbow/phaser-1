import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function SendChildToBack (parent: IParent, child: IGameObject): IGameObject
{
    const parentChildren = parent.children;

    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex !== -1 && currentIndex > 0)
    {
        parentChildren.splice(currentIndex, 1);
        parentChildren.unshift(child);

        child.setDirtyRender(true);
    }

    return child;
}
