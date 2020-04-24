import { ITransformGameObject } from './ITransformGameObject';

export function SetRotation (rotation: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.setRotation(rotation);
    });
}
