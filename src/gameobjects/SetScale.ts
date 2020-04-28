import { IGameObject } from './IGameObject';

export function SetScale (scaleX: number, scaleY: number, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.transform.setScale(scaleX, scaleY);
    });
}
