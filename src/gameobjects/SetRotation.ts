import { IGameObject } from './IGameObject';

export function SetRotation (rotation: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.rotation = rotation;
    });
}
