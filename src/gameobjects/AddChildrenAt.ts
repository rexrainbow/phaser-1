import { IGameObject } from './IGameObject';
import { SetParent } from './SetParent';
import { UpdateWorldTransform } from './components/transform/UpdateWorldTransform';

export function AddChildrenAt (parent: IGameObject, index: number, ...children: IGameObject[]): IGameObject[]
{
    const parentChildren = parent.children;

    if (index >= 0 && index <= parentChildren.length)
    {
        children.reverse().forEach(child =>
        {
            SetParent(parent, child);

            children.splice(index, 0, child);

            UpdateWorldTransform(child);
        });
    }

    return children;
}
