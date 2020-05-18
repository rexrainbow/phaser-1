import { IContainer } from '../gameobjects/container/IContainer';

export function SetOrigin (originX: number, originY: number, ...children: IContainer[]): IContainer[]
{
    children.forEach(child =>
    {
        child.setOrigin(originX, originY);
    });

    return children;
}
