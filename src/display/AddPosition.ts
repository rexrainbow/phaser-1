import { IGameObject } from '../gameobjects/IGameObject';

export function AddPosition <T extends IGameObject> (x: number, y: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.x += x;
        child.y += y;
    });

    return children;
}
