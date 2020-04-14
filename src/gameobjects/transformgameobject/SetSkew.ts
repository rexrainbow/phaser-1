import ITransformGameObject from './ITransformGameObject';
import CONST from './const';

export default function SetSkew (skewX: number, skewY: number, ...child: ITransformGameObject[])
{
    child.forEach(entity => {

        let data = entity.transformData;

        data[CONST.SKEW_X] = skewX;
        data[CONST.SKEW_Y] = skewY;

        entity.updateCache();

    });
}
