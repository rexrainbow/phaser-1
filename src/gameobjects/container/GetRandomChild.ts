import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function GetRandomChild (parent: IParent, startIndex: number = 0, length?: number): IGameObject
{
    const children = parent.children;

    if (!length)
    {
        length = children.length;
    }

    const randomIndex = startIndex + Math.floor(Math.random() * length);

    return children[randomIndex];
}
