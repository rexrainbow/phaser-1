import WebGLRenderer from './renderer/webgl1/WebGLRenderer';
import SceneManager from './scenes/SceneManager';
import TextureManager from './textures/TextureManager';
import EventEmitter from './events/EventEmitter';
export default class Game extends EventEmitter {
    VERSION: string;
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
    constructor(...settings: {
        (): void;
    }[]);
    pause(): void;
    resume(): void;
    boot(): void;
    banner(version: string): void;
    step(): void;
    destroy(): void;
}
//# sourceMappingURL=Game.d.ts.map