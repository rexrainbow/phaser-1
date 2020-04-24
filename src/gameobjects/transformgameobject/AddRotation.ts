import { ITransformGameObject } from './ITransformGameObject';

export function AddRotation (rotation: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.rotation += rotation;
    });
}
