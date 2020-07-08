import { IGameObject } from '../IGameObject';
export declare const PostUpdateEvent: string;
export declare type PostUpdateEventHandler = <T extends IGameObject>(delta: number, time: number, child: T) => void;
//# sourceMappingURL=PostUpdateEvent.d.ts.map