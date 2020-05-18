import { IGameObject } from '../gameobjects/IGameObject';
import { SetParent } from './SetParent';

export function AddChildren (parent: IGameObject, ...children: IGameObject[]): IGameObject[]
{
    SetParent(parent, ...children);

    children.forEach(child =>
    {
        parent.children.push(child);

        child.transform.updateWorld();
    });

    return children;
}
