import { IGameObject } from '../gameobject/IGameObject';
import { IWorld } from '../../world/IWorld';
import { Matrix2D } from '../../math/matrix2d/Matrix2D';

export interface IParent
{
    world: IWorld;
    localTransform?: Matrix2D;
    worldTransform?: Matrix2D;
    children: IGameObject[];
    numChildren: number;
}
