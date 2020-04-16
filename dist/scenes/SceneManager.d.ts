import Game from '../Game';
import IBaseScene from './IBaseScene';
import ISceneConfig from './ISceneConfig';
import IBaseSceneConstructor from './IBaseSceneConstructor';
export default class SceneManager {
    game: Game;
    scenes: Map<string, IBaseScene>;
    sceneIndex: number;
    flush: boolean;
    dirtyCameras: number;
    dirtyFrame: number;
    totalFrame: number;
    renderList: any[];
    constructor();
    boot(): void;
    add(scene: IBaseSceneConstructor): void;
    init(scene: IBaseScene, config?: string | ISceneConfig): void;
    update(delta: number, now: number): void;
    render(gameFrame: number): [any[], number, number];
}
//# sourceMappingURL=SceneManager.d.ts.map