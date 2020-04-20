import { ITransformGameObject } from '../transformgameobject/ITransformGameObject';
import { IParent } from './IParent';

export interface IContainer extends ITransformGameObject, IParent
{
    alpha: number;
    // setAlpha (value?: number): this;
}
