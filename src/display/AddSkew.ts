import { IContainer } from '../gameobjects/container/IContainer';

export function AddSkew (skewX: number, skewY: number, ...children: IContainer[]): IContainer[]
{
    children.forEach(child =>
    {
        child.skewX += skewX;
        child.skewY += skewY;
    });

    return children;
}
