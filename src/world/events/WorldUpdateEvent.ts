import { IBaseWorld } from '../IBaseWorld';

export const WorldUpdateEvent: string = 'worldupdate';

export type WorldUpdateEventHandler = (delta: number, time: number, world: IBaseWorld) => void;
