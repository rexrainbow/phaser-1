import { IGameObject } from './IGameObject';

export function SetPosition <T extends IGameObject> (x: number, y: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.transform.setPosition(x, y);
    });

    return children;
}
