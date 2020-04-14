import ITransformGameObject from '../transformgameobject/ITransformGameObject';
import IParent from './IParent';

export default interface IContainer extends ITransformGameObject, IParent
{
    alpha: number;
    // setAlpha (value?: number): this;
}
