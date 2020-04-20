import { IParent } from './IParent';
import { IGameObject } from '../gameobject/IGameObject';

export function RemoveChildrenBetween (parent: IParent, beginIndex: number = 0, endIndex?: number): IGameObject[]
{
    const children = parent.children;

    if (endIndex === undefined)
    {
        endIndex = children.length;
    }

    const range = endIndex - beginIndex;

    if (range > 0 && range <= endIndex)
    {
        const removed = children.splice(beginIndex, range);

        removed.forEach(child => {

            child.parent = null;

        });

        return removed;
    }
    else
    {
        return [];
    }
}
