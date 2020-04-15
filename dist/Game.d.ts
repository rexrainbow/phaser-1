import WebGLRenderer from './renderer/WebGLRenderer';
import SceneManager from './scenes/SceneManager';
import TextureManager from './textures/TextureManager';
import IGameConfig from './IGameConfig';
import EventEmitter from './core/EventEmitter';
export default class Game extends EventEmitter {
    VERSION: string;
    config: IGameConfig;
    isPaused: boolean;
    isBooted: boolean;
    scenes: SceneManager;
    textures: TextureManager;
    renderer: WebGLRenderer;
    cache: {
        json: Map<string, any>;
        csv: Map<string, any>;
        xml: Map<string, any>;
    };
    private lastTick;
    lifetime: number;
    elapsed: number;
    frame: number;
    constructor(config?: IGameConfig);
    pause(): void;
    resume(): void;
    boot(): void;
    banner(version: string): void;
    step(): void;
    destroy(): void;
}
//# sourceMappingURL=Game.d.ts.map