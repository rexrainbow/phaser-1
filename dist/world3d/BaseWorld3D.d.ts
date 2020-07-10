import { GameObject3D } from '../gameobjects3d/GameObject3D';
import { IBaseWorld3D } from './IBaseWorld3D';
import { ICamera3D } from '../camera3d/ICamera3D';
import { IEventInstance } from '../events/IEventInstance';
import { IGameObject3D } from '../gameobjects3d/IGameObject3D';
import { IRenderPass } from '../renderer/webgl1/renderpass/IRenderPass';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorld3DRenderData } from './IWorld3DRenderData';
import { SearchEntry3D } from '../display3d/SearchEntry3DType';
export declare class BaseWorld3D extends GameObject3D implements IBaseWorld3D {
    scene: IScene;
    camera: ICamera3D;
    renderData: IWorld3DRenderData;
    forceRefresh: boolean;
    events: Map<string, Set<IEventInstance>>;
    is3D: boolean;
    renderList: SearchEntry3D[];
    private _updateListener;
    private _renderListener;
    private _shutdownListener;
    constructor(scene: IScene);
    update(delta: number, time: number): void;
    postUpdate(delta: number, time: number): void;
    render(sceneRenderData: ISceneRenderData): void;
    renderNode(entry: SearchEntry3D, renderPass: IRenderPass): void;
    shutdown(): void;
    destroy(reparentChildren?: IGameObject3D): void;
}
//# sourceMappingURL=BaseWorld3D.d.ts.map