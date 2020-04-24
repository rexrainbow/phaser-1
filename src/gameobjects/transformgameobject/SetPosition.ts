import { ITransformGameObject } from './ITransformGameObject';

export function SetPosition (x: number, y: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.setPosition(x, y);
    });
}
