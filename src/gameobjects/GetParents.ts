import { IGameObject } from './IGameObject';

export function GetParents (child: IGameObject): IGameObject[]
{
    const parents: IGameObject[] = [];

    while (child.parent)
    {
        parents.push(child.parent);

        child = child.parent;
    }

    return parents;
}
