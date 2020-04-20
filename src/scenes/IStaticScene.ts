import { StaticWorld } from '../world/StaticWorld';
import { IScene } from './IScene';

export interface IStaticScene extends IScene
{
    world: StaticWorld;
}
