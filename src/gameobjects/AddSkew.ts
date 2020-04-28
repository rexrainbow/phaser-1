import { IGameObject } from './IGameObject';

export function AddSkew (skewX: number, skewY: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.skewX += skewX;
        entity.skewY += skewY;
    });
}
