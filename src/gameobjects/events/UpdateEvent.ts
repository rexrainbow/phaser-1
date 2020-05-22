import { IGameObject } from '../IGameObject';

export const UpdateEvent: string = 'update';

export type UpdateEventHandler = <T extends IGameObject> (delta: number, time: number, child: T) => void;
