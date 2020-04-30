import { IGameObject } from '../gameobjects/IGameObject';

export function SetScale <T extends IGameObject> (scaleX: number, scaleY: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.transform.setScale(scaleX, scaleY);
    });

    return children;
}
