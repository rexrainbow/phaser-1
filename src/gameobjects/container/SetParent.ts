import IGameObject from '../gameobject/IGameObject';
import IParent from './IParent';
import RemoveChild from './RemoveChild';

export default function SetParent (parent: IParent, ...child: IGameObject[])
{
    child.forEach(entity => {

        if (entity.parent)
        {
            RemoveChild(entity.parent, entity);
        }

        entity.scene = parent.scene;
        entity.parent = parent;

    });
}
