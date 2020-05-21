import { Off, On, Once } from '../events';

import { AddWorldPlugin } from './AddWorldPlugin';
import { BuildRenderList } from './BuildRenderList';
import { GameObject } from '../gameobjects';
import { IBaseCamera } from '../camera/IBaseCamera';
import { IBaseWorld } from './IBaseWorld';
import { IEventInstance } from '../events/IEventInstance';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldPluginConstructor } from './IWorldPluginConstructor';
import { IWorldRenderData } from './IWorldRenderData';
import { MergeRenderData } from './MergeRenderData';
import { RemoveChildren } from '../display';
import { ResetWorldRenderData } from './ResetWorldRenderData';
import { WorldPluginType } from './WorldPluginType';

export class BaseWorld extends GameObject implements IBaseWorld
{
    scene: IScene;

    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean = false;

    plugins: Map<string, WorldPluginType>;
    events: Map<string, Set<IEventInstance>>;

    private _updateListener: IEventInstance;
    private _renderListener: IEventInstance;
    private _shutdownListener: IEventInstance;

    constructor (scene: IScene, plugins?: IWorldPluginConstructor[])
    {
        super();

        this.type = 'BaseWorld';
        this.scene = scene;
        this.world = this;

        this.plugins = new Map();
        this.events = new Map();

        this._updateListener = On(scene, 'update', (delta: number, time: number) => this.update(delta, time));
        this._renderListener = On(scene, 'render', (renderData: ISceneRenderData) => this.render(renderData));
        this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());

        if (plugins)
        {
            AddWorldPlugin(this, ...plugins);
        }
    }

    update (delta: number, time: number): void
    {
        if (!this.willUpdate)
        {
            return;
        }

        this.plugins.forEach(plugin =>
        {
            plugin.update(delta, time);
        });

        super.update(delta, time);
    }

    postUpdate (delta: number, time: number): void
    {
        this.plugins.forEach(plugin =>
        {
            plugin.postUpdate(delta, time);
        });
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

        this.plugins.forEach(plugin =>
        {
            plugin.render(renderData);
        });

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

        this.plugins.forEach(plugin =>
        {
            plugin.shutdown();
        });

        ResetWorldRenderData(this.renderData, 0);

        if (this.camera)
        {
            this.camera.reset();
        }
    }

    destroy (reparentChildren?: IGameObject): void
    {
        super.destroy(reparentChildren);

        const plugins = this.plugins;

        plugins.forEach(plugin =>
        {
            plugin.destroy();
        });

        ResetWorldRenderData(this.renderData, 0);

        if (this.camera)
        {
            this.camera.destroy();
        }

        plugins.clear();

        this.camera = null;
        this.renderData = null;
    }
}
