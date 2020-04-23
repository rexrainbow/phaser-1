import { On, Once } from '../events';

import { Camera } from '../camera/Camera';
import { ICamera } from '../camera/ICamera';
import { IContainer } from '../gameobjects/container/IContainer';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { ISprite } from '../gameobjects/sprite/ISprite';
import { IWorld } from './IWorld';
import { Matrix2D } from '../math/matrix2d/Matrix2D';
import { RectangleToRectangle } from '../geom/intersects/RectangleToRectangle';

// import { IParent } from '../gameobjects/container/IParent';







export interface IWorldRenderResult
{
    camera: ICamera;
    rendered: ISprite[];
    numRendered: number;
}

export class World implements IWorld
{
    scene: IScene;

    children: IGameObject[] = [];

    camera: ICamera = new Camera();

    willRender: boolean = true;

    willUpdate: boolean = true;

    //  TODO: Move stats into data object

    //  How many Game Objects were made dirty this frame?
    dirtyFrame: number = 0;

    //  How many Game Objects will be rendered this frame? (are in-bounds)
    numRendered: number = 0;

    //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
    numRenderable: number = 0;

    //  A list of Game Objects that will be rendered in the next pass
    rendered: ISprite[] = [];

    forceRefresh: boolean = false;

    enableCameraCull: boolean = true;

    worldTransform: Matrix2D = new Matrix2D();

    constructor (scene: IScene)
    {
        this.scene = scene;

        On(scene, 'update', (delta: number, time: number) => this.update(delta, time));
        On(scene, 'render', (renderData: ISceneRenderData) => this.render(renderData));
        On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());
    }

    private scanChildren (root: IContainer | World, gameFrame: number): void
    {
        const children = root.children;

        for (let i = 0; i < children.length; i++)
        {
            this.buildRenderList(children[i], gameFrame);
        }
    }

    private buildRenderList (root: IGameObject, gameFrame: number): void
    {
        if (root.isRenderable())
        {
            const cull = this.enableCameraCull;

            if (!cull || (cull && RectangleToRectangle(root.getBounds(), this.camera.bounds)))
            {
                this.numRendered++;
                this.rendered.push(root as ISprite);

                if (root.dirtyFrame >= gameFrame)
                {
                    this.dirtyFrame++;
                }
            }

            this.numRenderable++;
        }

        if (root.isParent && root.visible)
        {
            this.scanChildren(root as IContainer, gameFrame);
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

    render (renderData: ISceneRenderData): void
    {
        this.dirtyFrame = 0;
        this.numRendered = 0;
        this.numRenderable = 0;
        this.rendered.length = 0;

        if (!this.willRender)
        {
            return;
        }

        this.scanChildren(this, renderData.gameFrame);

        if (this.forceRefresh)
        {
            this.dirtyFrame++;
            this.forceRefresh = false;
        }

        renderData.numDirtyFrames += this.dirtyFrame;
        renderData.numTotalFrames += this.numRendered;

        if (this.camera.dirtyRender)
        {
            renderData.numDirtyCameras++;

            this.camera.dirtyRender = false;
        }

        renderData.renderedWorlds.push({
            camera: this.camera,
            rendered: this.rendered,
            numRendered: this.numRendered
        });
    }

    shutdown (): void
    {
        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage

        // this.removeChildren();

        this.rendered = [];

        this.camera.reset();
    }

    destroy (): void
    {
        this.camera.destroy();

        this.camera = null;
        this.rendered = null;
    }

    get numChildren (): number
    {
        return this.children.length;
    }
}
