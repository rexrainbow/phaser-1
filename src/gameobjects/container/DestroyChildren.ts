import { IParent } from './IParent';
import { RemoveChildrenBetween } from './RemoveChildrenBetween';

export function DestroyChildren (parent: IParent, beginIndex: number = 0, endIndex?: number)
{
    const removed = RemoveChildrenBetween(parent, beginIndex, endIndex);

    removed.forEach(child => {

        child.destroy();

    });
}
