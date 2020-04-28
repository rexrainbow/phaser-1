import { IGameObject } from './IGameObject';

export function SetName (name: string, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.name = name;
    });
}
