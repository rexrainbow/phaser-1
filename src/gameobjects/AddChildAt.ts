import { IGameObject } from './IGameObject';
import { SetParent } from './SetParent';
import { UpdateWorldTransform } from './components/transform/UpdateWorldTransform';

export function AddChildAt <T extends IGameObject> (parent: IGameObject, index: number, child: T): T
{
    const children = parent.children;

    if (index >= 0 && index <= children.length)
    {
        SetParent(parent, child);

        children.splice(index, 0, child);

        UpdateWorldTransform(child);
    }

    return child;
}
