import StaticWorld from '../world/StaticWorld';
import IBaseScene from './IBaseScene';

export default interface IStaticScene extends IBaseScene
{
    world: StaticWorld;
}
