import { On, Once } from '../events';

import { Clock } from '../time/Clock';
import { CreateWorldRenderData } from './CreateWorldRenderData';
import { ICamera } from '../camera/ICamera';
import { IContainer } from '../gameobjects/container/IContainer';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { ISprite } from '../gameobjects/sprite/ISprite';
import { IStaticCamera } from '../camera/IStaticCamera';
import { IWorld } from './IWorld';
import { IWorldRenderData } from './IWorldRenderData';
import { Matrix2D } from '../math/matrix2d/Matrix2D';
import { MergeRenderData } from './MergeRenderData';
import { RemoveChildren } from '../gameobjects/container';
import { ResetWorldRenderData } from './ResetWorldRenderData';
import { StaticCamera } from '../camera/StaticCamera';

//  A Static World is designed specifically to have a bounds of a fixed size
//  and a camera that doesn't move at all (no scrolling, rotation, etc)
//  Because it has a fixed size, there is no camera culling enabled.
//  Games that use this kind of world include Pacman, Bejeweled and 2048.

export class StaticWorld implements IWorld
{
    world: IWorld;

    scene: IScene;

    clock: Clock;

    children: IGameObject[] = [];

    camera: IStaticCamera = new StaticCamera();

    willRender: boolean = true;

    willUpdate: boolean = true;

    renderData: IWorldRenderData;

    forceRefresh: boolean = false;

    worldTransform: Matrix2D = new Matrix2D();

    constructor (scene: IScene)
    {
        this.world = this;

        this.scene = scene;

        this.clock = new Clock(this);

        this.renderData = CreateWorldRenderData(this.camera);

        On(scene, 'update', (delta: number, time: number) => this.update(delta, time));
        On(scene, 'render', (renderData: ISceneRenderData) => this.render(renderData));
        On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());
    }

    private scanChildren (root: IContainer | StaticWorld, renderData: IWorldRenderData): void
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
            renderData.numRendered++;
            renderData.numRenderable++;
            renderData.renderList.push(root as ISprite);

            if (root.dirtyFrame >= renderData.gameFrame)
            {
                renderData.dirtyFrame++;
            }
        }

        if (root.isParent && root.visible)
        {
            this.scanChildren(root as IContainer, renderData);
        }
    }

    update (delta?: number, time?: number): void
    {
        if (!this.willUpdate)
        {
            return;
        }

        this.clock.update(delta, time);

        const children = this.children;

        for (let i = 0; i < children.length; i++)
        {
            let child = children[i];

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
