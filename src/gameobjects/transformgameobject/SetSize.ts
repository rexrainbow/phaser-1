import { ITransformGameObject } from './ITransformGameObject';

export function SetSize (width: number, height: number, ...child: ITransformGameObject[])
{
    child.forEach(entity => {

        entity.width = width;
        entity.height = height;

    });
}
