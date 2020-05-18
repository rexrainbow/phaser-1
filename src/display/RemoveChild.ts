import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobjects/IGameObject';
import { RemoveChildAt } from './RemoveChildAt';

export function RemoveChild <T extends IGameObject> (parent: IGameObject, child: T): T
{
    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex > -1)
    {
        RemoveChildAt(parent, currentIndex);
    }

    return child;
}
