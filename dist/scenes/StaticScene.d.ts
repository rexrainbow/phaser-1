import Game from '../Game';
import ISceneConfig from './ISceneConfig';
import StaticWorld from '../world/StaticWorld';
export default class StaticScene {
    key: string;
    willUpdate: boolean;
    willRender: boolean;
    game: Game;
    world: StaticWorld;
    constructor(config?: string | ISceneConfig);
    boot(): void;
    update(): void;
    render(): void;
    shutdown(): void;
    destroy(): void;
}
//# sourceMappingURL=StaticScene.d.ts.map