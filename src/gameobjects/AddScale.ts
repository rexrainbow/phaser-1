import { IGameObject } from './IGameObject';

export function AddScale (scaleX: number, scaleY: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.scaleX += scaleX;
        entity.scaleY += scaleY;
    });
}
