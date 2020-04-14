import IGameObject from '../gameobject/IGameObject';
import GetChildIndex from './GetChildIndex';

export default function SwapChildren (child1: IGameObject, child2: IGameObject)
{
    if (child1.parent === child2.parent)
    {
        const children = child1.parent.children;

        const index1 = GetChildIndex(child1.parent, child1);
        const index2 = GetChildIndex(child2.parent, child2);

        if (index1 !== index2)
        {
            children[index1] = child2;
            children[index2] = child1;
        }
    }
}
