import { IGameObject } from '../../IGameObject';

export interface IDirtyComponent
{
    entity: IGameObject;
    render: boolean;
    update: boolean;
    colors: boolean;
    frame: number;
    setRender (): void;
    setUpdate (): void;
    setColors (): void;
    destroy (): void;
}
