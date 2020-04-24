import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function ShuffleChildren (parent: IParent): IGameObject[]
{
    const children = parent.children;

    for (let i = children.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = children[i];

        children[i] = children[j];
        children[j] = temp;

        temp.setDirtyRender(true);
    }

    return children;
}
