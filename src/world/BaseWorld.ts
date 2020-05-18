import { Off, On, Once } from '../events';

import { Clock } from '../time';
import { DIRTY_CONST } from '../gameobjects/DIRTY_CONST';
import { GameObject } from '../gameobjects';
import { IBaseCamera } from '../camera/IBaseCamera';
import { IBaseWorld } from './IBaseWorld';
import { IEventInstance } from '../events/IEventInstance';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldRenderData } from './IWorldRenderData';
import { MergeRenderData } from './MergeRenderData';
import { RemoveChildren } from '../display';
import { ResetWorldRenderData } from './ResetWorldRenderData';

export class BaseWorld extends GameObject implements IBaseWorld
{
    scene: IScene;

    clock: Clock;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean = false;

    private _updateListener: IEventInstance;
    private _renderListener: IEventInstance;
    private _shutdownListener: IEventInstance;
    protected _stack: IGameObject[];

    constructor (scene: IScene)
    {
        super();

        this.type = 'BaseWorld';
        this.scene = scene;
        this.world = this;

        this.clock = new Clock(this);

        this._stack = [];

        this._updateListener = On(scene, 'update', (delta: number, time: number) => this.update(delta, time));
        this._renderListener = On(scene, 'render', (renderData: ISceneRenderData) => this.sceneRender(renderData));
        this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());
    }

    addNode (node: IGameObject, renderData: IWorldRenderData): boolean
    {
        if (node.isRenderable())
        {
            renderData.renderList.push(node);

            return (!node.isDirty(DIRTY_CONST.PENDING_RENDER));
        }

        return false;
    }

    //  Depth First Search with stack instead of recursion

    buildRenderList (renderData: IWorldRenderData): void
    {
        const stack = this._stack;

        while (stack.length > 0)
        {
            const node = stack.shift();

            if (this.addNode(node, renderData))
            {
                renderData.numRendered++;
                renderData.numRenderable++;

                if (node.dirtyFrame >= renderData.gameFrame)
                {
                    renderData.dirtyFrame++;
                }

                node.setDirty(DIRTY_CONST.PENDING_RENDER);
            }

            const numChildren = node.numChildren;

            if (!node.isDirty(DIRTY_CONST.POST_RENDER) && node.visible && node.willRenderChildren && numChildren > 0)
            {
                //  Inject postRender hook
                node.setDirty(DIRTY_CONST.POST_RENDER);

                stack.unshift(node);

                for (let i = numChildren - 1; i >= 0; i--)
                {
                    const child = node.children[i];

                    stack.unshift(child);
                }
            }
        }
    }

    update (delta: number, time: number): void
    {
        if (!this.willUpdate)
        {
            return;
        }

        this.clock.update(delta, time);

        super.update(delta, time);
    }

    sceneRender (sceneRenderData: ISceneRenderData): void
    {
        const renderData = this.renderData;

        ResetWorldRenderData(renderData, sceneRenderData.gameFrame);

        if (!this.willRender)
        {
            return;
        }

        this._stack = [ this ];

        this.buildRenderList(renderData);

        if (this.forceRefresh)
        {
            renderData.dirtyFrame++;

            this.forceRefresh = false;
        }

        MergeRenderData(sceneRenderData, renderData);
    }

    shutdown (): void
    {
        Off(this.scene, 'update', this._updateListener);
        Off(this.scene, 'render', this._renderListener);
        Off(this.scene, 'shutdown', this._shutdownListener);

        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage

        RemoveChildren(this);

        this.renderData.renderList.length = 0;
    }

    destroy (reparentChildren?: IGameObject): void
    {
        super.destroy(reparentChildren);

        this.renderData.renderList.length = 0;

        this.camera = null;
        this.renderData = null;
    }
}
