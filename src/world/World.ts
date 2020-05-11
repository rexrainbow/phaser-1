import { BaseWorld } from './BaseWorld';
import { Camera } from '../camera/Camera';
import { CreateWorldRenderData } from './CreateWorldRenderData';
import { ICamera } from '../camera/ICamera';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorld } from './IWorld';
import { RectangleToRectangle } from '../geom/intersects';

export class World extends BaseWorld implements IWorld
{
    camera: ICamera;

    enableCameraCull: boolean = true;

    constructor (scene: IScene)
    {
        super(scene);

        this.type = 'World';

        this.camera = new Camera();

        this.renderData = CreateWorldRenderData(this.camera);
    }

    addNodeToRenderList (node: IGameObject): boolean
    {
        const cull = this.enableCameraCull;

        return (!node.dirty.pendingRender && (!cull || (cull && RectangleToRectangle(node.bounds.get(), this.camera.bounds))));
    }

    sceneRender (sceneRenderData: ISceneRenderData): void
    {
        super.sceneRender(sceneRenderData);

        this.camera.dirtyRender = false;
    }

    shutdown (): void
    {
        super.shutdown();

        this.camera.reset();
    }

    destroy (reparentChildren?: IGameObject): void
    {
        this.camera.destroy();

        super.destroy(reparentChildren);
    }
}
