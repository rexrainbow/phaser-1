import { IGameObject } from './IGameObject';

export function SetBounds (x: number, y: number, width: number, height: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.bounds.setArea(x, y, width, height);
    });
}
