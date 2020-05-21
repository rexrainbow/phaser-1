import { AddedToWorldEvent, RemovedFromWorldEvent } from '../world/events';

import { Emit } from '../events/Emit';
import { IBaseWorld } from '../world/IBaseWorld';
import { IGameObject } from '../gameobjects/IGameObject';

export function SetWorld (world: IBaseWorld, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        if (child.world)
        {
            Emit(child.world, RemovedFromWorldEvent, child, child.world);
        }

        child.world = world;

        Emit(world, AddedToWorldEvent, child, world);
    });

    return children;
}
