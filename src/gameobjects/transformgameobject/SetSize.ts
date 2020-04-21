import { ITransformGameObject } from './ITransformGameObject';

export function SetSize (width: number, height: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.width = width;
        entity.height = height;
    });
}
