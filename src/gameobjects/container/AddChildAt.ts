import IGameObject from '../gameobject/IGameObject';
import IParent from './IParent';
import SetParent from './SetParent';

export default function AddChildAt (parent: IParent, index: number, ...child: IGameObject[])
{
    const children = parent.children;

    if (index >= 0 && index <= children.length)
    {
        child.reverse().forEach(entity => {

            SetParent(parent, entity);

            children.splice(index, 0, entity);

            entity.updateTransform();
    
        });
    }
}
