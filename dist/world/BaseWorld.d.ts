import { GameObject } from '../gameobjects';
import { IBaseCamera } from '../camera/IBaseCamera';
import { IBaseWorld } from './IBaseWorld';
import { IEventInstance } from '../events/IEventInstance';
import { IGameObject } from '../gameobjects/IGameObject';
import { IRenderPass } from '../renderer/webgl1/renderpass/IRenderPass';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldRenderData } from './IWorldRenderData';
import { SearchEntry } from '../display/SearchEntryType';
export declare class BaseWorld extends GameObject implements IBaseWorld {
    scene: IScene;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    events: Map<string, Set<IEventInstance>>;
    is3D: boolean;
    renderList: SearchEntry[];
    private _updateListener;
    private _renderListener;
    private _shutdownListener;
    constructor(scene: IScene);
    update(delta: number, time: number): void;
    postUpdate(delta: number, time: number): void;
    render(sceneRenderData: ISceneRenderData): void;
    renderGL<T extends IRenderPass>(renderPass: T): void;
    renderNode(entry: SearchEntry, renderPass: IRenderPass): void;
    postRenderGL<T extends IRenderPass>(renderPass: T): void;
    shutdown(): void;
    destroy(reparentChildren?: IGameObject): void;
}
//# sourceMappingURL=BaseWorld.d.ts.map