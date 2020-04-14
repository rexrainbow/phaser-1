import IGameObject from './IGameObject';

export default function SetVisible (visible: boolean, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.visible = visible;

    });
}
