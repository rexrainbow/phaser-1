import { IGameObject } from './IGameObject';
import { IWorld } from '../world/IWorld';

export function SetWorld (world: IWorld, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.world = world;
    });
}
