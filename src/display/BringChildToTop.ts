import { DIRTY_CONST } from '../gameobjects/DIRTY_CONST';
import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobjects/IGameObject';

export function BringChildToTop <T extends IGameObject> (parent: IGameObject, child: T): T
{
    const parentChildren = parent.children;

    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex !== -1 && currentIndex < parentChildren.length)
    {
        parentChildren.splice(currentIndex, 1);
        parentChildren.push(child);

        child.setDirty(DIRTY_CONST.TRANSFORM);
    }

    return child;
}
