import { IGameObject } from './IGameObject';

export function SetSize (width: number, height: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.transform.setSize(width, height);
    });
}
