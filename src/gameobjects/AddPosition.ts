import { IGameObject } from './IGameObject';

export function AddPosition (x: number, y: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.x += x;
        entity.y += y;
    });
}
