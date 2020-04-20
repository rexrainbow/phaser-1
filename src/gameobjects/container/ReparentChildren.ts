import IParent from './IParent';
import IGameObject from '../gameobject/IGameObject';
import RemoveChildrenBetween from './RemoveChildrenBetween';
import SetParent from './SetParent';

export default function ReparentChildren (parent: IParent, newParent: IParent, beginIndex: number = 0, endIndex?: number): IGameObject[]
{
    const moved = RemoveChildrenBetween(parent, beginIndex, endIndex);

    moved.forEach(child => {

        SetParent(newParent, child);

    });

    return moved;
}
