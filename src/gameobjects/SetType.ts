import { IGameObject } from './IGameObject';

export function SetType <T extends IGameObject> (type: string, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.type = type;
    });

    return children;
}
