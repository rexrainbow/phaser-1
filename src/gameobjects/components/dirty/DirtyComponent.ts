import { GameInstance } from '../../../GameInstance';
import { IDirtyComponent } from './IDirtyComponent';
import { IGameObject } from '../../IGameObject';

export class DirtyComponent implements IDirtyComponent
{
    entity: IGameObject;
    render: boolean = true;
    pendingRender: boolean = false;
    postRender: boolean = false;
    update: boolean = true;
    colors: boolean = true;
    frame: number = 0;

    constructor (entity: IGameObject)
    {
        this.entity = entity;
    }

    setPendingRender (): void
    {
        this.pendingRender = true;
    }

    setPostRender (): void
    {
        this.postRender = true;
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

    setColors (): void
    {
        this.colors = true;
        this.frame = GameInstance.getFrame();
    }

    destroy (): void
    {
        this.entity = null;
    }
}
