import { IGameObject } from '../gameobject/IGameObject';

export function GetChildAt (parent: IGameObject, index: number): IGameObject
{
    const children = parent.children;

    if (index < 0 || index > children.length)
    {
        throw new Error('Index out of bounds: ' + index);
    }

    return children[index];
}
