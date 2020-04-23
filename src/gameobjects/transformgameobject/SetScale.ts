import { CONST } from './const';
import { ITransformGameObject } from './ITransformGameObject';

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
