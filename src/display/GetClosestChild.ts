import { Distance } from '../math/vec2/Distance';
import { IGameObject } from '../gameobjects/IGameObject';
import { Vec2 } from '../math/vec2/Vec2';

export function GetClosestChild (parent: IGameObject, point: Vec2): IGameObject
{
    const children = parent.children;

    let closest: IGameObject = null;
    let distance: number = 0;

    children.forEach(child =>
    {
        const childDistance = Distance(point, child.transform.position);

        if (!closest || childDistance < distance)
        {
            closest = child;
            distance = childDistance;
        }

    });

    return closest;
}
