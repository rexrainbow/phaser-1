import { IGameObject } from './IGameObject';

export function SetVisible (visible: boolean, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.visible = visible;

    });
}
