import { IGameObject } from '../gameobjects/IGameObject';
import { RemoveChild } from './RemoveChild';

export function RemoveChildren (parent: IGameObject, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        RemoveChild(parent, child);
    });

    return children;
}
