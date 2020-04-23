import { CONST } from './const';
import { ITransformGameObject } from './ITransformGameObject';

export function SetSkew (skewX: number, skewY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        const data = entity.transformData;

        data[CONST.SKEW_X] = skewX;
        data[CONST.SKEW_Y] = skewY;

        entity.updateCache();
    });
}
