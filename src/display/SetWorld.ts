import { IBaseWorld } from '../world/IBaseWorld';
import { IGameObject } from '../gameobjects/IGameObject';

export function SetWorld <T extends IGameObject> (world: IBaseWorld, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.world = world;
    });

    return children;
}
