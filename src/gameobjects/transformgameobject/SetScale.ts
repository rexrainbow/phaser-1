import { ITransformGameObject } from './ITransformGameObject';
import { CONST } from './const';

export function SetScale (scaleX: number, scaleY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        const data = entity.transformData;

        data[CONST.SCALE_X] = scaleX;
        data[CONST.SCALE_Y] = scaleY;

        entity.updateTransform();
    });
}
