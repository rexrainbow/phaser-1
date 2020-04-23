import { IGameObject } from '../gameobject/IGameObject';
import { IScene } from '../../scenes/IScene';
import { Matrix2D } from '../../math/matrix2d/Matrix2D';

export interface IParent
{
    scene: IScene;
    localTransform?: Matrix2D;
    worldTransform?: Matrix2D;
    children: IGameObject[];
    numChildren: number;
}
