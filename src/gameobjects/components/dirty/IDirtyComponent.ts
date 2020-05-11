import { IGameObject } from '../../IGameObject';

export interface IDirtyComponent
{
    entity: IGameObject;
    render: boolean;
    pendingRender: boolean;
    postRender: boolean;
    update: boolean;
    colors: boolean;
    frame: number;
    setRender (): void;
    setPendingRender (): void;
    setPostRender (): void;
    setUpdate (): void;
    setColors (): void;
    destroy (): void;
}
