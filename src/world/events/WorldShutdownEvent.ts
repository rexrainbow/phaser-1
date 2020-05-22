import { IBaseWorld } from '../IBaseWorld';

export const WorldShutdownEvent: string = 'worldshutdown';

export type WorldShutdownEventHandler = (world: IBaseWorld) => void;
