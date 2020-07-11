import {AddToDOM, DOMContentLoaded} from "./dom";
import {Emit, EventEmitter} from "./events";
import {GameInstance as GameInstance2} from "./GameInstance";
import {GetBanner} from "./config/banner";
import {GetParent} from "./config/parent";
import {GetRenderer} from "./config/renderer";
import {SceneManager as SceneManager2} from "./scenes/SceneManager";
import {SetConfigDefaults as SetConfigDefaults2} from "./config/SetConfigDefaults";
import {TextureManager as TextureManager2} from "./textures/TextureManager";
export class Game extends EventEmitter {
  constructor(...settings) {
    super();
    this.VERSION = "4.0.0-beta1";
    this.isBooted = false;
    this.isPaused = false;
    this.willUpdate = true;
    this.willRender = true;
    this.lastTick = 0;
    this.elapsed = 0;
    this.frame = 0;
    GameInstance2.set(this);
    SetConfigDefaults2();
    DOMContentLoaded(() => this.boot(settings));
  }
  boot(settings) {
    settings.forEach((setting) => setting());
    const renderer2 = GetRenderer();
    this.renderer = new renderer2();
    this.textureManager = new TextureManager2();
    this.sceneManager = new SceneManager2();
    const parent2 = GetParent();
    if (parent2) {
      AddToDOM(this.renderer.canvas, parent2);
    }
    this.isBooted = true;
    GetBanner();
    Emit(this, "boot");
    this.lastTick = performance.now();
    this.step(this.lastTick);
  }
  pause() {
    this.isPaused = true;
  }
  resume() {
    this.isPaused = false;
    this.lastTick = performance.now();
  }
  step(time) {
    const delta = time - this.lastTick;
    this.lastTick = time;
    this.elapsed += delta;
    if (!this.isPaused) {
      if (this.willUpdate) {
        this.sceneManager.update(delta, time);
        Emit(this, "update", delta, time);
      }
      if (this.willRender) {
        this.renderer.render(this.sceneManager.render(this.frame));
      }
    }
    this.frame++;
    GameInstance2.setFrame(this.frame);
    GameInstance2.setElapsed(this.elapsed);
    requestAnimationFrame((now) => this.step(now));
  }
  destroy() {
  }
}
