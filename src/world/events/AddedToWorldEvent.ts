import { IBaseWorld } from '../IBaseWorld';
import { IGameObject } from '../../gameobjects/IGameObject';

export const AddedToWorldEvent: string = 'addedtoworld';

export type AddedToWorldEventHandler = (child: IGameObject, world: IBaseWorld) => void;
