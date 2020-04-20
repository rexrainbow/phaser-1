import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function RemoveChild (parent: IParent, child: IGameObject): IGameObject
{
    const children = parent.children;

    let index: number = children.indexOf(child);

    if (index > -1)
    {
        children.splice(index, 1);

        child.parent = null;
    }

    return child;
}
