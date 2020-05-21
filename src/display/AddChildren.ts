import { AddChild } from './AddChild';
import { IGameObject } from '../gameobjects/IGameObject';

export function AddChildren (parent: IGameObject, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        AddChild(parent, child);
    });

    return children;
}
