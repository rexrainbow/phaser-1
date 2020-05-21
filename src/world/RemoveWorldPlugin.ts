import { IBaseWorld } from './IBaseWorld';
import { IWorldPluginConstructor } from './IWorldPluginConstructor';

export function RemoveWorldPlugin (world: IBaseWorld, key: string | IWorldPluginConstructor): boolean
{
    return world.plugins.delete(key.toString());
}
