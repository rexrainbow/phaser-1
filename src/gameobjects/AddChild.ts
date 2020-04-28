import { IGameObject } from './IGameObject';
import { SetParent } from './SetParent';
import { UpdateWorldTransform } from './components/transform/UpdateWorldTransform';

export function AddChild (parent: IGameObject, child: IGameObject): IGameObject
{
    SetParent(parent, child);

    parent.children.push(child);

    UpdateWorldTransform(child);

    return child;
}
