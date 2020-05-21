import { IBaseWorld } from './IBaseWorld';
import { IWorldRenderData } from './IWorldRenderData';

export interface IWorldPlugin
{
    world: IBaseWorld;

    update (delta: number, time: number): void;
    render (renderData: IWorldRenderData): void;
    shutdown (): void;
    destroy (): void;
    toString (): string;
}
