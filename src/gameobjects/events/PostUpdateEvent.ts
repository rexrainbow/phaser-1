import { IGameObject } from '../IGameObject';

export const PostUpdateEvent: string = 'postupdate';

export type PostUpdateEventHandler = <T extends IGameObject> (child: T, delta: number, time: number) => void;
