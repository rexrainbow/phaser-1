import { IGameObject } from '../gameobjects/IGameObject';

export function AddSkew <T extends IGameObject> (skewX: number, skewY: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.skewX += skewX;
        child.skewY += skewY;
    });

    return children;
}
