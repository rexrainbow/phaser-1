import { IParent } from './IParent';
import { ITransformGameObject } from '../transformgameobject/ITransformGameObject';

export interface IContainer extends ITransformGameObject, IParent
{
    alpha: number;
    // setAlpha (value?: number): this;
}
