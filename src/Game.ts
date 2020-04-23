import { AddToDOM, DOMContentLoaded } from './dom';
import { Emit, EventEmitter } from './events';

import { GameInstance } from './GameInstance';
import { GetBanner } from './config/Banner';
import { GetParent } from './config';
import { SceneManager } from './scenes/SceneManager';
import { TextureManager } from './textures/TextureManager';
import { WebGLRenderer } from './renderer/webgl1/WebGLRenderer';

export class Game extends EventEmitter
{
    readonly VERSION: string = '4.0.0-beta1';

    isBooted: boolean = false;
    isPaused: boolean = false;

    willUpdate: boolean = true;
    willRender: boolean = true;

    private lastTick: number = 0;
    // lifetime: number = 0;
    // elapsed: number = 0;

    //  The current game frame
    frame: number = 0;

    renderer: WebGLRenderer;
    textureManager: TextureManager;
    sceneManager: SceneManager;

    //  TODO: This should be instance based, not defined here
    cache = {
        json: new Map<string, unknown>(),
        csv: new Map<string, unknown>(),
        xml: new Map<string, unknown>()
    };

    constructor (...settings: { (): void }[])
    {
        super();

        GameInstance.set(this);

        DOMContentLoaded(() => this.boot(settings));
    }

    boot (settings: { (): void }[]): void
    {
        //  Activate the settings post DOM Content Loaded
        settings.forEach(setting => setting());

        this.renderer = new WebGLRenderer();
        this.textureManager = new TextureManager();
        this.sceneManager = new SceneManager();

        //  Only add to the DOM if they either didn't set a Parent, or expressly set it to be non-null
        //  Otherwise we'll let them add the canvas to the DOM themselves
        const parent = GetParent();

        if (parent)
        {
            AddToDOM(this.renderer.canvas, parent);
        }

        this.isBooted = true;

        GetBanner();

        Emit(this, 'boot');

        this.lastTick = performance.now();

        requestAnimationFrame(now => this.step(now));
    }

    pause (): void
    {
        this.isPaused = true;
    }

    resume (): void
    {
        this.isPaused = false;

        this.lastTick = performance.now();
    }

    step (now: number): void
    {
        //  Note that privacy.resistFingerprinting can round this value to 100ms or more!
        const delta = (now - this.lastTick) / 1000;

        // this.lifetime += delta;
        // this.elapsed = delta;
        this.lastTick = now;

        if (!this.isPaused)
        {
            if (this.willUpdate)
            {
                this.sceneManager.update(delta, now);
            }

            if (this.willRender)
            {
                this.renderer.render(this.sceneManager.render(this.frame));
            }
        }

        //  The frame always advances by 1 each step (even when paused)
        this.frame++;

        requestAnimationFrame(now => this.step(now));
    }

    destroy (): void
    {
        //  TODO
    }
}
