import * as WorldEvents from './events';

import { Emit, Off, On, Once } from '../events';

import { BuildRenderList } from './BuildRenderList';
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

    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean = false;
    events: Map<string, Set<IEventInstance>>;

    private _updateListener: IEventInstance;
    private _renderListener: IEventInstance;
    private _shutdownListener: IEventInstance;

    constructor (scene: IScene)
    {
        super();

        this.type = 'BaseWorld';
        this.scene = scene;
        this.world = this;

        this.events = new Map();

        this._updateListener = On(scene, 'update', (delta: number, time: number) => this.update(delta, time));
        this._renderListener = On(scene, 'render', (renderData: ISceneRenderData) => this.render(renderData));
        this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());
    }

    update (delta: number, time: number): void
    {
        if (!this.willUpdate)
        {
            return;
        }

        Emit(this, WorldEvents.WorldUpdateEvent, delta, time, this);

        super.update(delta, time);
    }

    postUpdate (delta: number, time: number): void
    {
        Emit(this, WorldEvents.WorldPostUpdateEvent, delta, time, this);
    }

    render (sceneRenderData: ISceneRenderData): void
    {
        const renderData = this.renderData;

        ResetWorldRenderData(renderData, sceneRenderData.gameFrame);

        if (!this.willRender || !this.visible)
        {
            return;
        }

        BuildRenderList(this);

        Emit(this, WorldEvents.WorldRenderEvent, renderData, this);

        MergeRenderData(sceneRenderData, renderData);

        if (this.camera)
        {
            this.camera.dirtyRender = false;
        }
    }

    shutdown (): void
    {
        const scene = this.scene;

        Off(scene, 'update', this._updateListener);
        Off(scene, 'render', this._renderListener);
        Off(scene, 'shutdown', this._shutdownListener);

        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage

        RemoveChildren(this);

        Emit(this, WorldEvents.WorldShutdownEvent, this);

        ResetWorldRenderData(this.renderData, 0);

        if (this.camera)
        {
            this.camera.reset();
        }
    }

    destroy (reparentChildren?: IGameObject): void
    {
        super.destroy(reparentChildren);

        Emit(this, WorldEvents.WorldDestroyEvent, this);

        ResetWorldRenderData(this.renderData, 0);

        if (this.camera)
        {
            this.camera.destroy();
        }

        this.events.clear();

        this.camera = null;
        this.renderData = null;
        this.events = null;
    }
}
