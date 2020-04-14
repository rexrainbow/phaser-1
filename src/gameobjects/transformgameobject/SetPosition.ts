import ITransformGameObject from './ITransformGameObject';
import CONST from './const';

export default function SetPosition (x: number, y: number, ...child: ITransformGameObject[])
{
    child.forEach(entity => {

        let data = entity.transformData;

        data[CONST.POSITION_X] = x;
        data[CONST.POSITION_Y] = y;

        entity.updateTransform();

    });
}
