import { IGameObject } from '../gameobjects/IGameObject';

export function SetType (type: string, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        child.type = type;
    });

    return children;
}
