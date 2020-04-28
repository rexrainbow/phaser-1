import { IGameObject } from '../gameobject/IGameObject';
import { RemoveChild } from './RemoveChild';

export function RemoveChildren (parent: IGameObject, ...children: IGameObject[]): void
{
    children.forEach(child =>
    {
        RemoveChild(parent, child);
    });
}
