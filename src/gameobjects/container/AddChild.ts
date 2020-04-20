import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';
import { SetParent } from './SetParent';

export function AddChild (parent: IParent, child: IGameObject): IGameObject
{
    SetParent(parent, child);

    parent.children.push(child);

    child.updateTransform();

    return child;
}
