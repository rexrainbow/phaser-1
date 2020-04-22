import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function GetChildIndex (parent: IParent, child: IGameObject): number
{
    return parent.children.indexOf(child);
}
