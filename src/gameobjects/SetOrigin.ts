import { IGameObject } from './IGameObject';

export function SetOrigin (originX: number, originY: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.transform.setOrigin(originX, originY);
    });
}
