import { IGameObject } from '../IGameObject';

export const PostUpdateEvent: string = 'postupdate';

export type PostUpdateEventHandler = <T extends IGameObject> (delta: number, time: number, child: T) => void;
