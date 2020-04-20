import { Matrix2D } from '../../math/matrix2d/Matrix2D';
import { IScene } from '../../scenes/IScene';
import { IGameObject } from '../gameobject/IGameObject';

export interface IParent
{
    scene: IScene;
    localTransform?: Matrix2D;
    worldTransform?: Matrix2D;
    children: IGameObject[];
    numChildren: number;
}
