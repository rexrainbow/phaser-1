import IGameObject from '../gameobjects/gameobject/IGameObject';
import StaticCamera from '../camera/StaticCamera';
import StaticScene from '../scenes/StaticScene';
export default class StaticWorld {
    scene: StaticScene;
    children: IGameObject[];
    camera: StaticCamera;
    dirtyFrame: number;
    totalFrame: number;
    visibleFrame: number;
    private renderList;
    forceRefresh: boolean;
    worldTransform: Float32Array;
    constructor(scene: StaticScene);
    private scanChildren;
    private buildRenderList;
    update(delta?: number, time?: number): void;
    render(gameFrame: number): number;
    shutdown(): void;
    destroy(): void;
    get numChildren(): number;
}
//# sourceMappingURL=StaticWorld.d.ts.map