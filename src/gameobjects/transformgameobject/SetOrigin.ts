import { CONST } from './const';
import { ITransformGameObject } from './ITransformGameObject';

export function SetOrigin (originX: number, originY: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity => {

        const data = entity.transformData;

        data[CONST.ORIGIN_X] = originX;
        data[CONST.ORIGIN_Y] = originY;
    });
}
