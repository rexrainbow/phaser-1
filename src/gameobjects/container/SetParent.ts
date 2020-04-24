import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';
import { RemoveChild } from './RemoveChild';

export function SetParent (parent: IParent, ...child: IGameObject[]): void
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
