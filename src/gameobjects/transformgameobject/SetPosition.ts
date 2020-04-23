import { CONST } from './const';
import { ITransformGameObject } from './ITransformGameObject';

export function SetPosition (x: number, y: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity => {

        const data = entity.transformData;

        data[CONST.POSITION_X] = x;
        data[CONST.POSITION_Y] = y;

        entity.updateTransform();

    });
}
