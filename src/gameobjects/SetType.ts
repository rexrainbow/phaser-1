import { IGameObject } from './IGameObject';

export function SetType (type: string, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.type = type;
    });
}
