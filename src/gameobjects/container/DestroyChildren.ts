import IParent from './IParent';
import RemoveChildren from './RemoveChildren';

export default function DestroyChildren (parent: IParent, beginIndex: number = 0, endIndex?: number)
{
    const removed = RemoveChildren(parent, beginIndex, endIndex);

    removed.forEach(child => {

        child.destroy();

    });
}
