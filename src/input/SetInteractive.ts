import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { IInteractiveArea } from './IInteractiveArea';

export function SetInteractive (child: IGameObject, hitArea?: IInteractiveArea)
{
    child.inputEnabled = true;
    child.inputHitArea = hitArea;
    child.inputEnabledChildren = true;
}
