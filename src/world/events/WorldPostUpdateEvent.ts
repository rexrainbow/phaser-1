import { IBaseWorld } from '../IBaseWorld';

export const WorldPostUpdateEvent: string = 'worldpostupdate';

export type WorldPostUpdateEventHandler = (delta: number, time: number, world: IBaseWorld) => void;
