import { DepthFirstSearch } from './DepthFirstSearch';
import { IGameObject } from '../gameobjects/IGameObject';

//  Assume parent is always the World for now
export function ConsoleTreeChildren (parent: IGameObject): void
{
    const children = DepthFirstSearch(parent);

    console.log(children);

    // let parentCount = 1;
    // let childCount = 1;
    let prevParent: IGameObject;

    console.group(parent.name);

    // if (parent.world === parent)
    // {
    //     console.group('World');
    // }
    // else
    // {
    //     console.group('Parent 1');

    //     parentCount = 2;
    // }

    let depth = 0;

    children.forEach(child =>
    {
        if (child.numChildren > 0)
        {
            console.group(child.name);

            prevParent = child;

            depth++;
        }
        else
        {
            console.log(child.name);
        }

        if (child.parent !== prevParent)
        {
        }

        // if (prevParent && child.parent && child.parent !== prevParent)
        // {
        //     console.groupEnd();
        // }
    });

    console.groupEnd();
}
