import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function GetChildAt (parent: IParent, index: number): IGameObject
{
    const children = parent.children;

    if (index < 0 || index > children.length)
    {
        throw new Error('Index out of bounds: ' + index);
    }

    return children[index];
}
