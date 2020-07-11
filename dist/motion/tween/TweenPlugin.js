import {On as On2} from "../../events/On";
import {Tween as Tween2} from "./Tween";
import {UpdateEvent as UpdateEvent2} from "../../gameobjects/events/UpdateEvent";
export class TweenPlugin {
  constructor(world) {
    this.tweens = new Set();
    this.paused = false;
    this.timeScale = 1;
    this.world = world;
    On2(world, UpdateEvent2, (delta) => this.update(delta));
  }
  add(target, autoStart = true) {
    const tween = new Tween2(target, autoStart);
    this.tweens.add(tween);
    return tween;
  }
  update(delta) {
    if (this.paused) {
      return;
    }
    delta *= this.timeScale;
    const tweens = this.tweens;
    for (const tween of tweens) {
      if (tween.update(delta)) {
        tweens.delete(tween);
      }
    }
  }
  killAllTweens() {
    const tweens = this.tweens;
    tweens.forEach((tween) => {
      tween.dispose();
    });
    tweens.clear();
  }
  killTweensOf(target) {
    const tweens = this.tweens;
    tweens.forEach((tween) => {
      if (tween.target === target) {
        tween.dispose();
        tweens.delete(tween);
      }
    });
  }
  pauseAllTweens() {
    this.paused = true;
  }
  resumeAllTweens() {
    this.paused = false;
  }
  destroy() {
    this.killAllTweens();
  }
}
