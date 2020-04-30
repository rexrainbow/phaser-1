import { DistanceBetween } from '../math/distance/DistanceBetween';
import { IGameObject } from '../gameobjects/IGameObject';
import { IVec2 } from '../math/vec2/IVec2';

export function GetFurthestChild (parent: IGameObject, point: IVec2): IGameObject
{
    const children = parent.children;

    let furthest: IGameObject = null;
    let distance: number = 0;

    children.forEach(child =>
    {
        const childDistance = DistanceBetween(point.x, point.y, child.x, child.y);

        if (!furthest || childDistance > distance)
        {
            furthest = child;
            distance = childDistance;
        }

    });

    return furthest;
}
