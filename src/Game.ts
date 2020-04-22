import { AddToDOM, DOMContentLoaded } from './dom';
import { Emit, EventEmitter } from './events';

import { GameInstance } from './GameInstance';
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
    lifetime: number = 0;
    elapsed: number = 0;

    //  The current game frame
    frame: number = 0;

    renderer: WebGLRenderer;
    textures: TextureManager;
    scenes: SceneManager;

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

        settings.forEach(setting => setting());

        DOMContentLoaded(() => this.boot());
    }

    boot (): void
    {
        this.renderer = new WebGLRenderer();
        this.textures = new TextureManager();
        this.scenes = new SceneManager();

        //  Only add to the DOM if they either didn't set a Parent, or expressly set it to be non-null
        //  Otherwise we'll let them add the canvas to the DOM themselves
        if (GetParent())
        {
            AddToDOM(this.renderer.canvas, GetParent());
        }

        this.banner(this.VERSION);

        //  Visibility API = move to own function
        document.addEventListener('visibilitychange', () =>
        {
            if (document.hidden)
            {
                this.pause();
            }
            else
            {
                this.resume();
            }
        });

        // window.addEventListener('blur', this.pause);
        // window.addEventListener('focus', this.resume);

        this.isBooted = true;

        Emit(this, 'boot');

        this.lastTick = performance.now();

        requestAnimationFrame(now => this.step(now));
    }

    banner (version: string): void
    {
        console.log(
            '%cPhaser v' + version + '%c https://phaser4.io',
            'padding: 4px 16px; color: #fff; background: linear-gradient(#3e0081 40%, #00bcc3)',
            ''
        );
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
        const delta = now - this.lastTick;

        const dt = delta / 1000;

        this.lifetime += dt;
        this.elapsed = dt;
        this.lastTick = now;

        if (!this.isPaused)
        {
            if (this.willUpdate)
            {
                this.scenes.update(dt, now);
            }

            if (this.willUpdate)
            {
                this.renderer.render(this.scenes.render(this.frame));
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
