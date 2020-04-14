import IGameObject from '../gameobject/IGameObject';
import IParent from './IParent';

export default function RemoveChild (parent: IParent, ...child: IGameObject[])
{
    const children = parent.children;

    child.forEach(entity => {

        let index: number = children.indexOf(entity);

        if (index > -1)
        {
            children.splice(index, 1);

            entity.parent = null;
        }

    });
}
