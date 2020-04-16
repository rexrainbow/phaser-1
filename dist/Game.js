import { AddToDOM, DOMContentLoaded } from './dom';
import WebGLRenderer from './renderer/webgl1/WebGLRenderer';
import SceneManager from './scenes/SceneManager';
import TextureManager from './textures/TextureManager';
import EventEmitter from './events/EventEmitter';
import GameInstance from './GameInstance';
import { GetParent } from './config';
export default class Game extends EventEmitter {
    constructor(...settings) {
        super();
        this.VERSION = '4.0.0-beta1';
        this.isPaused = false;
        this.isBooted = false;
        this.lifetime = 0;
        this.elapsed = 0;
        //  The current game frame
        this.frame = 0;
        settings.forEach(setting => {
            setting();
        });
        this.cache = {
            json: new Map(),
            csv: new Map(),
            xml: new Map()
        };
        GameInstance.set(this);
        DOMContentLoaded(() => this.boot());
    }
    pause() {
        this.isPaused = true;
        this.emit('pause');
    }
    resume() {
        this.isPaused = false;
        this.lastTick = Date.now();
        this.emit('resume');
    }
    boot() {
        this.isBooted = true;
        this.lastTick = Date.now();
        const renderer = new WebGLRenderer();
        //  Only add to the DOM if they either didn't set a Parent, or expressly set it to be non-null
        //  Otherwise we'll let them add the canvas to the DOM themselves
        if (GetParent()) {
            AddToDOM(renderer.canvas, GetParent());
        }
        this.renderer = renderer;
        this.textures = new TextureManager();
        this.scenes = new SceneManager();
        this.banner(this.VERSION);
        //  Visibility API
        document.addEventListener('visibilitychange', () => {
            this.emit('visibilitychange', document.hidden);
            if (document.hidden) {
                this.pause();
            }
            else {
                this.resume();
            }
        });
        // window.addEventListener('blur', () => this.pause());
        // window.addEventListener('focus', () => this.resume());
        this.emit('boot');
        requestAnimationFrame(() => this.step());
    }
    banner(version) {
        console.log('%cPhaser v' + version + '%c https://phaser4.io', 'padding: 4px 16px; color: #fff; background: linear-gradient(#3e0081 40%, #00bcc3)', '');
    }
    step() {
        const now = Date.now();
        const delta = now - this.lastTick;
        const dt = delta / 1000;
        this.lifetime += dt;
        this.elapsed = dt;
        this.lastTick = now;
        this.emit('step', dt, now);
        const sceneManager = this.scenes;
        if (!this.isPaused) {
            sceneManager.update(dt, now);
        }
        this.emit('update', dt, now);
        //  TODO: Optimize to remove const and array creation here:
        const [renderList, dirtyFrame, dirtyCameras] = sceneManager.render(this.frame);
        this.renderer.render(renderList, dirtyFrame, dirtyCameras);
        this.emit('render', dt, now);
        //  The frame always advances by 1 each step (even when paused)
        this.frame++;
        requestAnimationFrame(() => this.step());
    }
    destroy() {
        //  TODO
    }
}
//# sourceMappingURL=Game.js.map