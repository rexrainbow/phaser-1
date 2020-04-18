import IBaseCamera from '../camera/IBaseCamera';
import IGameObject from '../gameobjects/gameobject/IGameObject';
import IRenderable from '../gameobjects/sprite/IRenderable';
import { IDestroyable } from '../types/IDestroyable';

export default interface IWorld extends IDestroyable
{
    camera: IBaseCamera;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    children: IGameObject[];
    rendered: IRenderable[];
    forceRefresh: boolean;
    update (delta?: number, time?: number);
    render (gameFrame: number): number;
    shutdown (): void;
}
