import { IGameObject } from './IGameObject';
import { RemoveChild } from './RemoveChild';

export function SetParent (parent: IGameObject, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        if (entity.parent)
        {
            RemoveChild(entity.parent, entity);
        }

        entity.world = parent.world;
        entity.parent = parent;
    });
}
