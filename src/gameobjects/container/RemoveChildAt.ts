import IParent from './IParent';
import GetChildAt from './GetChildAt';
import IGameObject from '../gameobject/IGameObject';

export default function RemoveChildAt (parent: IParent, ...index: number[]): IGameObject[]
{
    const children = parent.children;
    const removed: IGameObject[] = [];
    
    //  Sort into numeric order
    index.sort((a, b) => a - b);

    //  Work through the array in reverse
    index.reverse().forEach(entity => {

        let child = GetChildAt(parent, entity);

        if (child)
        {
            children.splice(entity, 1);

            child.parent = null;

            removed.push(child);
        }

    });

    return removed;
}
