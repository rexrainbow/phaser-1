import { IGameObject } from './IGameObject';

export function AddScale <T extends IGameObject> (scaleX: number, scaleY: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.scaleX += scaleX;
        child.scaleY += scaleY;
    });

    return children;
}
