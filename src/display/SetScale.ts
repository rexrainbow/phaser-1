import { IContainer } from '../gameobjects/container/IContainer';

export function SetScale (scaleX: number, scaleY: number, ...children: IContainer[]): IContainer[]
{
    children.forEach(child =>
    {
        child.setScale(scaleX, scaleY);
    });

    return children;
}
