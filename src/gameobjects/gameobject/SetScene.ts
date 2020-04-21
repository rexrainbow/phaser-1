import { IScene } from '../../scenes/IScene';
import { IGameObject } from './IGameObject';

export function SetScene (scene: IScene, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.scene = scene;
    });
}
