import { IGameObject } from '../gameobjects/IGameObject';
import { RectangleToRectangle } from '../geom/intersects/RectangleToRectangle';

//  AABB Overlap test using bounds

export function Overlap (source: IGameObject, ...targets: IGameObject[]): boolean
{
    const sourceBounds = source.bounds.get();

    for (let i = 0; i < targets.length; i++)
    {
        const target = targets[i];
        const targetBounds = target.bounds.get();

        if (RectangleToRectangle(sourceBounds, targetBounds))
        {
            return true;
        }
    }

    return false;
}
