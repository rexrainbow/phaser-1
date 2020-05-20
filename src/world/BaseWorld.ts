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
import { SearchEntry } from '../display/DepthFirstSearchRecursiveNested';

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

    protected _stack: SearchEntry[];
    protected _cachedLayers: SearchEntry[];

    constructor (scene: IScene)
    {
        super();

        this.type = 'BaseWorld';
        this.scene = scene;
        this.world = this;

        this.clock = new Clock(this);

        this._updateListener = On(scene, 'update', (delta: number, time: number) => this.update(delta, time));
        this._renderListener = On(scene, 'render', (renderData: ISceneRenderData) => this.sceneRender(renderData));
        this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());
    }

    depthFirstSearch (parent: IGameObject, output: SearchEntry[] = []): SearchEntry[]
    {
        for (let i = 0; i < parent.numChildren; i++)
        {
            const node = parent.children[i];

            if (node.isRenderable())
            {
                const children: SearchEntry[] = [];

                const entry = { node, children };

                output.push(entry);

                if (node.willRenderChildren && node.numChildren > 0)
                {
                    if (node.willCacheChildren)
                    {
                        this._cachedLayers.push(entry);
                    }

                    this.depthFirstSearch(node, children);
                }
            }
        }

        return output;
    }

    calculateTotal (entry: SearchEntry, renderData: IWorldRenderData): void
    {
        renderData.numRendered++;
        renderData.numRenderable++;

        if (entry.node.dirtyFrame >= renderData.gameFrame)
        {
            renderData.dirtyFrame++;
        }

        entry.children.forEach(child =>
        {
            if (child.children.length > 0)
            {
                this.calculateTotal(child, renderData);
            }
        });
    }

    updateCachedLayers (): void
    {
        const dirtyCamera = this.camera.dirtyRender;
        const layers = this._cachedLayers;

        layers.forEach(entry =>
        {
            if (dirtyCamera || this.hasDirtyChildren(entry))
            {
                //  Camera is dirty, or layer has at least one dirty child
                entry.node.setDirty(DIRTY_CONST.CHILD_CACHE);
            }
            else
            {
                //  Camera is clean and no dirty children, so we can re-use layer cache
                //  So let's remove the children for this layer
                entry.children.length = 0;
            }
        });
    }

    hasDirtyChildren (parent: SearchEntry): boolean
    {
        if (parent.node.isDirty(DIRTY_CONST.CHILD_CACHE))
        {
            return true;
        }

        const stack = [ parent ];

        while (stack.length > 0)
        {
            const entry = stack.pop();

            if (entry.node.isDirty(DIRTY_CONST.TRANSFORM))
            {
                return true;
            }

            const numChildren = entry.children.length;

            if (numChildren > 0)
            {
                for (let i = 0; i < numChildren; i++)
                {
                    stack.push(entry.children[i]);
                }
            }
        }

        stack.length = 0;

        return false;
    }

    buildRenderList (renderData: IWorldRenderData): void
    {
        //  entries is now populated with the n-tree search results, only containing nodes that will actually render
        const entries = this.depthFirstSearch(this, this._stack);

        //  We can now sweep through the entries and purge non-dirty children of cached layers,
        //  before finally building the render list. We can only do this if the camera is clean.

        if (this._cachedLayers.length > 0)
        {
            this.updateCachedLayers();
        }

        //  numRenderable probably needs to move to the search function
        entries.forEach(entry =>
        {
            if (entry.children.length)
            {
                this.calculateTotal(entry, renderData);
            }
            else
            {
                renderData.numRendered++;
                renderData.numRenderable++;

                if (entry.node.dirtyFrame >= renderData.gameFrame)
                {
                    renderData.dirtyFrame++;
                }
            }
        });

        renderData.renderList = entries;

        // console.log(entries);

        // eslint-disable-next-line no-debugger
        // debugger;
    }

    // registerPlugin (plugin)
    // {
    // }

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

        this._stack = [];
        this._cachedLayers = [];

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
