import { IGameObject } from './IGameObject';

export function SetPosition (x: number, y: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.transform.setPosition(x, y);
    });
}
