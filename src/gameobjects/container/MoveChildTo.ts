import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function MoveChildTo (parent: IParent, child: IGameObject, index: number): IGameObject
{
    const parentChildren = parent.children;

    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex === -1 || index < 0 || index >= parentChildren.length)
    {
        throw new Error('Index out of bounds');
    }

    if (currentIndex !== index)
    {
        //  Remove
        parentChildren.splice(currentIndex, 1);

        //  Add in new location
        parentChildren.splice(index, 0, child);

        child.setDirtyRender(true);
    }

    return child;
}
