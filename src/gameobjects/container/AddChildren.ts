import IGameObject from '../gameobject/IGameObject';
import IParent from './IParent';
import SetParent from './SetParent';

export default function AddChildren (parent: IParent, ...children: IGameObject[])
{
    children.forEach(child => {

        SetParent(parent, child);

        parent.children.push(child);

        child.updateTransform();

    });
}
