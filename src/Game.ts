import { GetParent } from './config';
import { AddToDOM, DOMContentLoaded } from './dom';
import EventEmitter from './events/EventEmitter';
import GameInstance from './GameInstance';
import WebGLRenderer from './renderer/webgl1/WebGLRenderer';
import SceneManager from './scenes/SceneManager';
import TextureManager from './textures/TextureManager';

export default class Game extends EventEmitter
{
    VERSION: string = '4.0.0-beta1';

    renderer: WebGLRenderer;
    textures: TextureManager;
    scenes: SceneManager;

    isPaused: boolean = false;
    isBooted: boolean = false;

    cache = {
        json: new Map<string, any>(),
        csv: new Map<string, any>(),
        xml: new Map<string, any>()
    };

    private lastTick: number = 0;
    lifetime: number = 0;
    elapsed: number = 0;

    //  The current game frame
    frame: number = 0;

    constructor (...settings: { (): void }[])
    {
        super();

        GameInstance.set(this);

        settings.forEach(setting => setting());

        this.renderer = new WebGLRenderer();
        this.textures = new TextureManager();
        this.scenes = new SceneManager();

        DOMContentLoaded(this.boot);
    }

    boot = () =>
    {
        this.isBooted = true;

        //  Only add to the DOM if they either didn't set a Parent, or expressly set it to be non-null
        //  Otherwise we'll let them add the canvas to the DOM themselves
        if (GetParent())
        {
            AddToDOM(this.renderer.canvas, GetParent());
        }

        this.banner(this.VERSION);

        //  Visibility API
        document.addEventListener('visibilitychange', () => {

            this.emit('visibilitychange', document.hidden);

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

        this.emit('boot');

        this.lastTick = performance.now();

        requestAnimationFrame(this.step);
    }

    pause = () =>
    {
        this.isPaused = true;

        this.emit('pause');
    }

    resume = () =>
    {
        this.isPaused = false;

        this.lastTick = performance.now();

        this.emit('resume');
    }

    banner (version: string)
    {
        console.log(
            '%cPhaser v' + version + '%c https://phaser4.io',
            'padding: 4px 16px; color: #fff; background: linear-gradient(#3e0081 40%, #00bcc3)',
            ''
        );
    }

    step = (now: number) =>
    {
        const delta = now - this.lastTick;

        const dt = delta / 1000;

        this.lifetime += dt;
        this.elapsed = dt;
        this.lastTick = now;
    
        this.emit('step', dt, now);

        const sceneManager = this.scenes;

        if (!this.isPaused)
        {
            sceneManager.update(dt, now);
        }

        this.emit('update', dt, now);

        this.renderer.render(sceneManager.render(this.frame));

        this.emit('render', dt, now);

        //  The frame always advances by 1 each step (even when paused)
        this.frame++;

        requestAnimationFrame(this.step);
    }

    destroy ()
    {
        //  TODO
    }
}
