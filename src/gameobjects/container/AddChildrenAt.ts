import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';
import { SetParent } from './SetParent';

export function AddChildrenAt (parent: IParent, index: number, ...children: IGameObject[]): IGameObject[]
{
    const parentChildren = parent.children;

    if (index >= 0 && index <= parentChildren.length)
    {
        children.reverse().forEach(child =>
        {
            SetParent(parent, child);

            children.splice(index, 0, child);

            child.updateTransform();

        });
    }

    return children;
}
