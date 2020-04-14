import ITransformGameObject from './ITransformGameObject';
import CONST from './const';

export default function SetScale (scaleX: number, scaleY: number, ...child: ITransformGameObject[])
{
    child.forEach(entity => {

        let data = entity.transformData;

        data[CONST.SCALE_X] = scaleX;
        data[CONST.SCALE_Y] = scaleY;

        entity.updateTransform();

    });
}
