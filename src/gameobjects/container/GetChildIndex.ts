import { IParent } from './IParent';
import { IGameObject } from '../gameobject/IGameObject';

export function GetChildIndex (parent: IParent, child: IGameObject): number
{
    return parent.children.indexOf(child);
}
