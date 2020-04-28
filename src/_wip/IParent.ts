import { IGameObject } from '../gameobject/IGameObject';
import { ITransformComponent } from '../gameobject/ITransformComponent';
import { IWorld } from '../../world/IWorld';

export interface IParent
{
    world: IWorld;
    children: IGameObject[];
    numChildren: number;
    transform: ITransformComponent;
}
