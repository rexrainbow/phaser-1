import { ITransformGameObject } from './ITransformGameObject';

export function SetOrigin (originX: number, originY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.originX = originX;
        entity.originY = originY;
    });
}
