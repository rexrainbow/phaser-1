import { IGameObject } from './IGameObject';
import { IWorld } from '../world/IWorld';

export function SetWorld <T extends IGameObject> (world: IWorld, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.world = world;
    });

    return children;
}
