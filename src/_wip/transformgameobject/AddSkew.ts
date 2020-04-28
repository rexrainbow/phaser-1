import { ITransformGameObject } from './ITransformGameObject';

export function AddSkew (skewX: number, skewY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.skewX += skewX;
        entity.skewY += skewY;
    });
}
