import StaticCamera from '../camera/StaticCamera';
import IGameObject from '../gameobjects/gameobject/IGameObject';
import StaticScene from '../scenes/StaticScene';
export default interface IStaticWorld {
    scene: StaticScene;
    dirtyFrame: number;
    totalFrame: number;
    visibleFrame: number;
    children: IGameObject[];
    numChildren: number;
    camera: StaticCamera;
    forceRefresh: boolean;
    render(gameFrame: number): number;
    shutdown(): void;
    destroy(): void;
}
//# sourceMappingURL=IStaticWorld.d.ts.map