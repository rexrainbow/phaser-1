import { IGameObject } from '../IGameObject';

export const DestroyEvent: string = 'destroy';

export type DestroyEventHandler = <T extends IGameObject> (child: T) => void;
