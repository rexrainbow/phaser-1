import { IBaseWorld } from './IBaseWorld';
import { IWorldPlugin } from './IWorldPlugin';

export interface IWorldPluginConstructor
{
    new (world: IBaseWorld): IWorldPlugin;
}
