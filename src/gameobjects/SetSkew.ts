import { IGameObject } from './IGameObject';

export function SetSkew <T extends IGameObject> (skewX: number, skewY: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.transform.setSkew(skewX, skewY);
    });

    return children;
}
