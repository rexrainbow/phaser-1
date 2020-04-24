import { ITransformGameObject } from './ITransformGameObject';

export function AddScale (scaleX: number, scaleY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.scaleX += scaleX;
        entity.scaleY += scaleY;
    });
}
