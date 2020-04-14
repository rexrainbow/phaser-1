import Camera from '../camera/Camera';
import Scene from '../scenes/Scene';
import IGameObject from '../gameobjects/gameobject/IGameObject';

export default interface IWorld
{
    scene: Scene;
    dirtyFrame: number;
    totalFrame: number;
    visibleFrame: number;
    boundsFrame: number;
    children: IGameObject[];
    camera: Camera;
    forceRefresh: boolean;
    render (gameFrame: number): number
    shutdown (): void;
    destroy (): void;
}
