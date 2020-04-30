import { DistanceBetween } from '../math/distance/DistanceBetween';
import { IGameObject } from './IGameObject';
import { IVec2 } from '../math/vec2/IVec2';

export function GetClosestChild (parent: IGameObject, point: IVec2): IGameObject
{
    const children = parent.children;

    let closest: IGameObject = null;
    let distance: number = 0;

    children.forEach(child =>
    {
        const childDistance = DistanceBetween(point.x, point.y, child.x, child.y);

        if (!closest || childDistance < distance)
        {
            closest = child;
            distance = childDistance;
        }

    });

    return closest;
}
