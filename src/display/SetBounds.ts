import { IGameObject } from '../gameobjects/IGameObject';

export function SetBounds (x: number, y: number, width: number, height: number, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        child.bounds.set(x, y, width, height);
    });

    return children;
}
