import { IGameObject } from './IGameObject';

export function AddRotation <T extends IGameObject> (rotation: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.rotation += rotation;
    });

    return children;
}
