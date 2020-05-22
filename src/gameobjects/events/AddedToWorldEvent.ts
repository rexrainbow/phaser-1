import { IBaseWorld } from '../../world/IBaseWorld';
import { IGameObject } from '../IGameObject';

export const AddedToWorldEvent: string = 'addedtoworld';

export type AddedToWorldEventHandler = <T extends IGameObject, U extends IBaseWorld> (child: T, world: U) => void;
