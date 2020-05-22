import { IBaseWorld } from '../IBaseWorld';

export const WorldDestroyEvent: string = 'worlddestroy';

export type WorldDestroyEventHandler = (world: IBaseWorld) => void;
