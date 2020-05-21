import { IBaseWorld } from '../IBaseWorld';
import { IGameObject } from '../../gameobjects/IGameObject';

export const RemovedFromWorldEvent: string = 'removedfromworld';

export type RemovedFromWorldEventHandler = (child: IGameObject, world: IBaseWorld) => void;
