import { ITransformGameObject } from './ITransformGameObject';

export function SetSkew (skewX: number, skewY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.setSkew(skewX, skewY);
    });
}
