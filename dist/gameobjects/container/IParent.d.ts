import IGameObject from '../gameobject/IGameObject';
import IBaseScene from '../../scenes/IBaseScene';
export default interface IParent {
    scene: IBaseScene;
    localTransform?: Float32Array;
    worldTransform?: Float32Array;
    children: IGameObject[];
    numChildren: number;
}
//# sourceMappingURL=IParent.d.ts.map