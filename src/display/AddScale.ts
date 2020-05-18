import { IContainer } from '../gameobjects/container/IContainer';

export function AddScale (scaleX: number, scaleY: number, ...children: IContainer[]): IContainer[]
{
    children.forEach(child =>
    {
        child.scaleX += scaleX;
        child.scaleY += scaleY;
    });

    return children;
}
