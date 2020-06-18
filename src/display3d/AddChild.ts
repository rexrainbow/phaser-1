import { IGameObject3D } from '../gameobjects3d/IGameObject3D';
import { SetParent } from './SetParent';

export function AddChild <T extends IGameObject3D> (parent: IGameObject3D, child: T): T
{
    parent.children.push(child);

    SetParent(parent, child);

    child.transform.updateWorld();

    return child;
}
