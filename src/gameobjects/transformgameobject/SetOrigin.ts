import { ITransformGameObject } from './ITransformGameObject';
import { CONST } from './const';

export function SetOrigin (originX: number, originY: number, ...child: ITransformGameObject[])
{
    child.forEach(entity => {

        let data = entity.transformData;

        data[CONST.ORIGIN_X] = originX;
        data[CONST.ORIGIN_Y] = originY;
    });
}
