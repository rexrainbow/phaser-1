import { IGameObject } from './IGameObject';

export function SetVisible (visible: boolean, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.visible = visible;
    });
}
