import { IGameObject } from './IGameObject';
import { SetParent } from './SetParent';
import { UpdateWorldTransform } from './components/transform/UpdateWorldTransform';

export function AddChildren (parent: IGameObject, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        SetParent(parent, child);

        parent.children.push(child);

        UpdateWorldTransform(child);
    });

    return children;
}
