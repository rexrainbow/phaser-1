import IGameObject from './IGameObject';

export default function SetName (name: string, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.name = name;

    });
}
