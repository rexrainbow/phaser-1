import { IGameObject } from './IGameObject';

export function SetSize <T extends IGameObject> (width: number, height: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.transform.setSize(width, height);
    });

    return children;
}
