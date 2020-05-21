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

    boot (): void
    {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update (delta: number, time: number): void
    {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postUpdate (delta: number, time: number): void
    {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
