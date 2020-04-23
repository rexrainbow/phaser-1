import { CONST } from './const';
import { ITransformGameObject } from './ITransformGameObject';

export function SetRotation (rotation: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        const data = entity.transformData;

        if (rotation !== data[CONST.ROTATION])
        {
            data[CONST.ROTATION] = rotation;

            entity.updateCache();
        }
    });
}
