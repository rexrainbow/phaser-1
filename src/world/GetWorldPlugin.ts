import { IBaseWorld } from './IBaseWorld';
import { IWorldPluginConstructor } from './IWorldPluginConstructor';
import { WorldPluginType } from './WorldPluginType';

export function GetWorldPlugin (world: IBaseWorld, key: string | IWorldPluginConstructor): WorldPluginType
{
    return world.plugins.get(key.toString());
}
