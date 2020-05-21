import { IBaseWorld } from './IBaseWorld';
import { IWorldPluginConstructor } from './IWorldPluginConstructor';

export function AddWorldPlugin (world: IBaseWorld, ...plugins: IWorldPluginConstructor[]): void
{
    plugins.forEach(plugin =>
    {
        const instance = new plugin(world);

        world.plugins.set(plugin.toString(), instance);
    });
}
