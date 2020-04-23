import { IGameObject } from './IGameObject';
import { IScene } from '../../scenes/IScene';

export function SetScene (scene: IScene, ...child: IGameObject[]): void
{
    child.forEach(entity =>
    {
        entity.scene = scene;
    });
}
