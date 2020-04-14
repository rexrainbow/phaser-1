import World from '../world/World';
import IBaseScene from './IBaseScene';

export default interface IScene extends IBaseScene
{
    world: World;
}
