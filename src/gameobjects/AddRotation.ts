import { IGameObject } from './IGameObject';

export function AddRotation (rotation: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.rotation += rotation;
    });
}
