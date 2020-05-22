import { IGameObject } from '../IGameObject';

export const UpdateEvent: string = 'update';

export type UpdateEventHandler = <T extends IGameObject> (child: T, delta: number, time: number) => void;
