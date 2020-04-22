import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';
import { SetParent } from './SetParent';

export function AddChildAt (parent: IParent, index: number, child: IGameObject): IGameObject
{
    const children = parent.children;

    if (index >= 0 && index <= children.length)
    {
        SetParent(parent, child);

        children.splice(index, 0, child);

        child.updateTransform();
    }

    return child;
}
