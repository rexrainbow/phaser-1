import IGameObject from './IGameObject';

export default function SetBounds (x: number, y: number, width: number, height: number, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.bounds.set(x, y, width, height);

    });
}
