import { ITransformGameObject } from './ITransformGameObject';

export function SetScale (scaleX: number, scaleY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.scaleX = scaleX;
        entity.scaleY = scaleY;
    });
}
