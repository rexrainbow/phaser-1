import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';

export function MoveChildTo (parent: IGameObject, child: IGameObject, index: number): IGameObject
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

        child.dirty.setRender();
    }

    return child;
}
