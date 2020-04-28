import { IGameObject } from '../../IGameObject';
import { IInputComponent } from './IInputComponent';
import { IInteractiveArea } from '../../../input/IInteractiveArea';

export class InputComponent implements IInputComponent
{
    parent: IGameObject;
    enabled: boolean = false;
    enabledChildren: boolean = true;
    hitArea: IInteractiveArea;

    constructor (parent: IGameObject)
    {
        this.parent = parent;
    }

    destroy (): void
    {
        this.parent = null;
        this.hitArea = null;
    }
}
