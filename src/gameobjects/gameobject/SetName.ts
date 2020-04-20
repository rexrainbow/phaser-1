import { IGameObject } from './IGameObject';

export function SetName (name: string, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.name = name;

    });
}
