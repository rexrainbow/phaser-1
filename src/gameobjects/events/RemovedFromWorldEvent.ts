import { IBaseWorld } from '../../world/IBaseWorld';
import { IGameObject } from '../IGameObject';

export const RemovedFromWorldEvent: string = 'removedfromworld';

export type RemovedFromWorldEventHandler = <T extends IGameObject, U extends IBaseWorld> (child: T, world: U) => void;
