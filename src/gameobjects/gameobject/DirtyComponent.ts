import { GameInstance } from '../../GameInstance';
import { IDirtyComponent } from './IDirtyComponent';
import { IGameObject } from './IGameObject';

export class DirtyComponent implements IDirtyComponent
{
    parent: IGameObject;
    render: boolean = true;
    update: boolean = true;
    frame: number = 0;

    constructor (parent: IGameObject)
    {
        this.parent = parent;
    }

    setRender (): void
    {
        this.render = true;
        this.frame = GameInstance.getFrame();
    }

    setUpdate (): void
    {
        this.update = true;
    }

    destroy (): void
    {
        this.parent = null;
    }
}
