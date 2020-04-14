import IGameObject from './IGameObject';
import IBaseScene from '../../scenes/IBaseScene';

export default function SetScene (scene: IBaseScene, ...child: IGameObject[])
{
    child.forEach(entity => {

        entity.scene = scene;

    });
}
