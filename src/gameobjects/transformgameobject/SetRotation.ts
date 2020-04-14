import ITransformGameObject from './ITransformGameObject';
import CONST from './const';

export default function SetRotation (rotation: number, ...child: ITransformGameObject[])
{
    child.forEach(entity => {

        let data = entity.transformData;

        if (rotation !== data[CONST.ROTATION])
        {
            data[CONST.ROTATION] = rotation;

            entity.updateCache();
        }

    });
}
