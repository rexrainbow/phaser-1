import { ITransformGameObject } from './ITransformGameObject';
import { CONST } from './const';

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
