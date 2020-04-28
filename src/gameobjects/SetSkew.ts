import { IGameObject } from './IGameObject';

export function SetSkew (skewX: number, skewY: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.transform.setSkew(skewX, skewY);
    });
}
