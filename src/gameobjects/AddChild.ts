import { IGameObject } from './IGameObject';
import { SetParent } from './SetParent';
import { UpdateWorldTransform } from './components/transform/UpdateWorldTransform';

export function AddChild <T extends IGameObject> (parent: IGameObject, child: T): T
{
    SetParent(parent, child);

    parent.children.push(child);

    UpdateWorldTransform(child);

    return child;
}
