import { ITransformGameObject } from './ITransformGameObject';

export function SetScale (scaleX: number, scaleY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.setScale(scaleX, scaleY);
    });
}
