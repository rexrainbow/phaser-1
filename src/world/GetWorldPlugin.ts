import { IBaseWorld } from './IBaseWorld';
import { IWorldPlugin } from './IWorldPlugin';
import { IWorldPluginConstructor } from './IWorldPluginConstructor';

export function GetWorldPlugin (world: IBaseWorld, key: string | IWorldPluginConstructor): IWorldPlugin
{
    return world.plugins.get(key.toString());
}
