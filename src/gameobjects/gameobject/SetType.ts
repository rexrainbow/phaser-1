import IGameObject from './IGameObject';

export default function SetType (type: string, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.type = type;

    });
}
