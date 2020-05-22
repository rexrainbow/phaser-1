import { IBaseWorld } from '../IBaseWorld';
import { IWorldRenderData } from '../IWorldRenderData';

export const WorldRenderEvent: string = 'worldrender';

export type WorldRenderEventHandler = (renderData: IWorldRenderData, world: IBaseWorld) => void;
