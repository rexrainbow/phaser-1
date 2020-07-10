import { IBaseWorld3D } from '../world3d/IBaseWorld3D';
import { IEventInstance } from '../events/IEventInstance';
import { IGameObject3D } from './IGameObject3D';
import { IRenderPass } from '../renderer/webgl1/renderpass/IRenderPass';
import { Transform3DComponent } from './components/transform3d/Transform3DComponent';
export declare class GameObject3D {
    type: string;
    name: string;
    world: IBaseWorld3D;
    parent: IGameObject3D;
    children: IGameObject3D[];
    events: Map<string, Set<IEventInstance>>;
    willUpdate: boolean;
    willUpdateChildren: boolean;
    willRender: boolean;
    willRenderChildren: boolean;
    willCacheChildren: boolean;
    dirty: number;
    dirtyFrame: number;
    transform: Transform3DComponent;
    visible: boolean;
    constructor(x?: number, y?: number, z?: number);
    isRenderable(): boolean;
    isDirty(flag: number): boolean;
    clearDirty(flag: number): this;
    setDirty(flag: number, flag2?: number): this;
    update(delta: number, time: number): void;
    postUpdate(delta: number, time: number): void;
    renderGL<T extends IRenderPass>(renderPass: T): void;
    postRenderGL<T extends IRenderPass>(renderPass: T): void;
    get numChildren(): number;
    destroy(reparentChildren?: IGameObject3D): void;
}
//# sourceMappingURL=GameObject3D.d.ts.map