import Game from '../Game';
import World from '../world/World';
import ISceneConfig from './ISceneConfig';
export default class Scene {
    key: string;
    willUpdate: boolean;
    willRender: boolean;
    game: Game;
    world: World;
    constructor(config?: string | ISceneConfig);
    boot(): void;
    update(): void;
    render(): void;
    shutdown(): void;
    destroy(): void;
}
//# sourceMappingURL=Scene.d.ts.map