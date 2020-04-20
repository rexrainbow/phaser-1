import IScene from '../../scenes/IScene';
import IGameObject from './IGameObject';

export default function SetScene (scene: IScene, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.scene = scene;

    });
}
