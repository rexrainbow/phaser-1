import IGameObject from '../gameobjects/gameobject/IGameObject';
import StaticCamera from '../camera/StaticCamera';
import StaticScene from '../scenes/StaticScene';
import Matrix2D from '../math/matrix2d/Matrix2D';
export default class StaticWorld {
    scene: StaticScene;
    children: IGameObject[];
    camera: StaticCamera;
    dirtyFrame: number;
    totalFrame: number;
    visibleFrame: number;
    private renderList;
    forceRefresh: boolean;
    worldTransform: Matrix2D;
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