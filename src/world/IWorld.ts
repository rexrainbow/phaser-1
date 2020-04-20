import ICamera from '../camera/ICamera';
import IGameObject from '../gameobjects/gameobject/IGameObject';
import ISprite from '../gameobjects/sprite/ISprite';
import { IDestroyable } from '../types/IDestroyable';

export default interface IWorld extends IDestroyable
{
    camera: ICamera;
    dirtyFrame: number;
    numRendered: number;
    numRenderable: number;
    children: IGameObject[];
    rendered: ISprite[];
    forceRefresh: boolean;
    update (delta?: number, time?: number): void;
    render (gameFrame: number): number;
    shutdown (): void;
}
