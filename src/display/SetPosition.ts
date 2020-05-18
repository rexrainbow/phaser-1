import { IContainer } from '../gameobjects/container/IContainer';

export function SetPosition (x: number, y: number, ...children: IContainer[]): IContainer[]
{
    children.forEach(child =>
    {
        child.setPosition(x, y);
    });

    return children;
}
