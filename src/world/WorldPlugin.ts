import { IBaseWorld } from './IBaseWorld';
import { IWorldPlugin } from './IWorldPlugin';
import { IWorldRenderData } from './IWorldRenderData';

export class WorldPlugin implements IWorldPlugin
{
    static key: string = '';

    world: IBaseWorld;

    constructor (world: IBaseWorld)
    {
        this.world = world;
    }

    update (delta: number, time: number): void
    {
    }

    render (renderData: IWorldRenderData): void
    {
    }

    shutdown (): void
    {
    }

    destroy (): void
    {
    }

    toString (): string
    {
        return WorldPlugin.key;
    }
}
