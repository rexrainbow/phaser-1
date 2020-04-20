import { IGameObject } from './IGameObject';

export function SetType (type: string, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.type = type;

    });
}
