import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function RotateChildrenRight (parent: IParent, total: number = 1): IGameObject
{
    const parentChildren = parent.children;

    let child = null;

    for (let i: number = 0; i < total; i++)
    {
        child = parentChildren.pop();

        parentChildren.unshift(child);

        child.setDirtyRender(true);
    }

    return child;
}
