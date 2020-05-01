import { IGameObject } from '../gameobjects/IGameObject';

export function SetRotation <T extends IGameObject> (rotation: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.rotation = rotation;
    });

    return children;
}