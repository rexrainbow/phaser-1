import Camera from '../camera/Camera';
import Scene from '../scenes/Scene';
import IGameObject from '../gameobjects/gameobject/IGameObject';
import Matrix2D from '../math/matrix2d/Matrix2D';
export default class World {
    scene: Scene;
    children: IGameObject[];
    camera: Camera;
    dirtyFrame: number;
    totalFrame: number;
    visibleFrame: number;
    boundsFrame: number;
    private renderList;
    forceRefresh: boolean;
    enableCameraCull: boolean;
    worldTransform: Matrix2D;
    constructor(scene: Scene);
    private scanChildren;
    private buildRenderList;
    update(delta?: number, time?: number): void;
    render(gameFrame: number): number;
    shutdown(): void;
    destroy(): void;
    get numChildren(): number;
}
//# sourceMappingURL=World.d.ts.map