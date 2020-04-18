import ICamera from '../camera/ICamera';
import IGameObject from '../gameobjects/gameobject/IGameObject';
import IRenderable from '../gameobjects/sprite/IRenderable';
import { IDestroyable } from '../types/IDestroyable';

export default interface IWorld extends IDestroyable
{
    camera: ICamera;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    children: IGameObject[];
    rendered: IRenderable[];
    forceRefresh: boolean;
    update (delta?: number, time?: number): void;
    render (gameFrame: number): number;
    shutdown (): void;
}
