import StaticWorld from '../world/StaticWorld';
import IScene from './IScene';

export default interface IStaticScene extends IScene
{
    world: StaticWorld;
}
