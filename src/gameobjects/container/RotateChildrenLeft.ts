import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function RotateChildrenLeft (parent: IParent, total: number = 1): IGameObject
{
    const parentChildren = parent.children;

    let child = null;

    for (let i: number = 0; i < total; i++)
    {
        child = parentChildren.shift();

        parentChildren.push(child);

        child.setDirtyRender(true);
    }

    return child;
}
