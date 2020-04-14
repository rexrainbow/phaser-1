import IGameObject from '../gameobjects/gameobject/IGameObject';
import IInteractiveArea from './IInteractiveArea';

export default function SetInteractive (child: IGameObject, hitArea?: IInteractiveArea)
{
    child.inputEnabled = true;
    child.inputHitArea = hitArea;
    child.inputEnabledChildren = true;
}
