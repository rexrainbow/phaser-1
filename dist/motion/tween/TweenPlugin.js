import { UpdateEvent } from '../../gameobjects/events/UpdateEvent.js';
import '../../events/EventInstance.js';
import { On } from '../../events/On.js';
import '../../Linear-8dd9e56a.js';
import './TweenProperty.js';
import { Tween } from './Tween.js';

class TweenPlugin {
    constructor(world) {
        this.tweens = new Set();
        this.paused = false;
        this.timeScale = 1;
        this.world = world;
        On(world, UpdateEvent, (delta) => this.update(delta));
    }
    add(target, autoStart = true) {
        const tween = new Tween(target, autoStart);
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
        tweens.forEach(tween => {
            tween.dispose();
        });
        tweens.clear();
    }
    killTweensOf(target) {
        const tweens = this.tweens;
        tweens.forEach(tween => {
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

export { TweenPlugin };
