import { On, Once } from '../events';

import { Camera } from '../camera/Camera';
import { CreateWorldRenderData } from './CreateWorldRenderData';
import { ICamera } from '../camera/ICamera';
import { IContainer } from '../gameobjects/container/IContainer';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { ISprite } from '../gameobjects/sprite/ISprite';
import { IWorld } from './IWorld';
import { IWorldRenderData } from './IWorldRenderData';
import { Matrix2D } from '../math/matrix2d/Matrix2D';
import { MergeRenderData } from './MergeRenderData';
import { RectangleToRectangle } from '../geom/intersects/RectangleToRectangle';
import { RemoveChildren } from '../gameobjects/container';
import { ResetWorldRenderData } from './ResetWorldRenderData';

export class World implements IWorld
{
    scene: IScene;

    children: IGameObject[] = [];

    camera: ICamera = new Camera();

    willRender: boolean = true;

    willUpdate: boolean = true;

    renderData: IWorldRenderData;

    forceRefresh: boolean = false;

    enableCameraCull: boolean = true;

    worldTransform: Matrix2D = new Matrix2D();

    constructor (scene: IScene)
    {
        this.scene = scene;

        this.renderData = CreateWorldRenderData(this.camera);

        On(scene, 'update', (delta: number, time: number) => this.update(delta, time));
        On(scene, 'render', (renderData: ISceneRenderData) => this.render(renderData));
        On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());
    }

    private scanChildren (root: IContainer | World, renderData: IWorldRenderData): void
    {
        const children = root.children;

        for (let i = 0; i < children.length; i++)
        {
            this.buildRenderList(children[i], renderData);
        }
    }

    private buildRenderList (root: IGameObject, renderData: IWorldRenderData): void
    {
        if (root.isRenderable())
        {
            const cull = this.enableCameraCull;

            if (!cull || (cull && RectangleToRectangle(root.getBounds(), this.camera.bounds)))
            {
                renderData.numRendered++;
                renderData.renderList.push(root as ISprite);

                if (root.dirtyFrame >= renderData.gameFrame)
                {
                    renderData.dirtyFrame++;
                }
            }

            renderData.numRenderable++;
        }

        if (root.isParent && root.visible)
        {
            this.scanChildren(root as IContainer, renderData);
        }
    }

    update (delta: number, time: number): void
    {
        if (!this.willUpdate)
        {
            return;
        }

        const children = this.children;

        for (let i = 0; i < children.length; i++)
        {
            const child = children[i];

            if (child && child.willUpdate)
            {
                child.update(delta, time);
            }
        }
    }

    render (sceneRenderData: ISceneRenderData): void
    {
        const renderData = this.renderData;

        ResetWorldRenderData(renderData, sceneRenderData.gameFrame);

        if (!this.willRender)
        {
            return;
        }

        this.scanChildren(this, renderData);

        if (this.forceRefresh)
        {
            renderData.dirtyFrame++;

            this.forceRefresh = false;
        }

        MergeRenderData(sceneRenderData, renderData);

        this.camera.dirtyRender = false;
    }

    shutdown (): void
    {
        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage

        RemoveChildren(this);

        this.renderData.renderList.length = 0;

        this.camera.reset();
    }

    destroy (): void
    {
        this.camera.destroy();
        this.renderData.renderList.length = 0;

        this.camera = null;
        this.renderData = null;
    }

    get numChildren (): number
    {
        return this.children.length;
    }
}
