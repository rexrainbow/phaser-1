import { ITransformGameObject } from './ITransformGameObject';

export function AddPosition (x: number, y: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.x += x;
        entity.y += y;
    });
}
