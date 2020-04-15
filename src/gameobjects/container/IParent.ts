import IGameObject from '../gameobject/IGameObject';
import IBaseScene from '../../scenes/IBaseScene';
import Matrix2D from '../../math/matrix2d/Matrix2D';

export default interface IParent
{
    scene: IBaseScene;
    localTransform?: Matrix2D;
    worldTransform?: Matrix2D;
    children: IGameObject[];
    numChildren: number;
}
