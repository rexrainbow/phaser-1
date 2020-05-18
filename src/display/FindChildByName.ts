import { DepthFirstSearch } from './DepthFirstSearch';
import { IGameObject } from '../gameobjects/IGameObject';

export function FindChildByName (parent: IGameObject, searchString: string): IGameObject | undefined
{
    const children = DepthFirstSearch(parent);
    const regex = RegExp(searchString);

    for (let i = 0; i < children.length; i++)
    {
        const child = children[i];

        if (regex.test(child.name))
        {
            return child;
        }
    }
}
