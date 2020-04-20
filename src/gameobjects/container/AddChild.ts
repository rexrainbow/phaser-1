import IGameObject from '../gameobject/IGameObject';
import IParent from './IParent';
import SetParent from './SetParent';

export default function AddChild (parent: IParent, child: IGameObject | IGameObject[])
{
    if (Array.isArray(child))
    {
        child.forEach(entity => {

            SetParent(parent, entity);

            parent.children.push(entity);

            entity.updateTransform();

        });
    }
    else
    {
        SetParent(parent, child);

        parent.children.push(child);

        child.updateTransform();
    }
}
