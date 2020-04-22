import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';
import { RemoveChild } from './RemoveChild';

export function RemoveChildren (parent: IParent, ...children: IGameObject[]): void
{
    children.forEach(child =>
    {
        RemoveChild(parent, child);
    });
}
