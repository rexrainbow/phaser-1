import { IGameObject } from './IGameObject';

export function SetOrigin <T extends IGameObject> (originX: number, originY: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.transform.setOrigin(originX, originY);
    });

    return children;
}
