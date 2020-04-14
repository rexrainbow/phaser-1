import IGameObject from '../gameobject/IGameObject';
import IParent from './IParent';
import SetParent from './SetParent';

export default function AddChild (parent: IParent, ...child: IGameObject[])
{
    child.forEach(entity => {

        SetParent(parent, entity);

        parent.children.push(entity);

        entity.updateTransform();

    });
}
