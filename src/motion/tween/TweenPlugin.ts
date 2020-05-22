import { IBaseWorld } from '../../world/IBaseWorld';
import { ITweenPlugin } from './ITweenPlugin';
import { On } from '../../events/On';
import { Tween } from './Tween';
import { UpdateEvent } from '../../gameobjects/events/UpdateEvent';

export class TweenPlugin implements ITweenPlugin
{
    world: IBaseWorld;

    private tweens: Set<Tween> = new Set();
    private paused: boolean = false;

    timeScale: number = 1;

    constructor (world: IBaseWorld)
    {
        this.world = world;

        On(world, UpdateEvent, (delta: number) => this.update(delta));
    }

    add (target: {}, autoStart: boolean = true): Tween
    {
        const tween = new Tween(target, autoStart);

        this.tweens.add(tween);

        return tween;
    }

    update (delta: number): void
    {
        if (this.paused)
        {
            return;
        }

        delta *= this.timeScale;

        const tweens = this.tweens;

        for (const tween of tweens)
        {
            if (tween.update(delta))
            {
                tweens.delete(tween);
            }
        }
    }

    killAllTweens (): void
    {
        const tweens = this.tweens;

        tweens.forEach(tween =>
        {
            tween.dispose();
        });

        tweens.clear();
    }

    killTweensOf (target: {}): void
    {
        const tweens = this.tweens;

        tweens.forEach(tween =>
        {
            if (tween.target === target)
            {
                tween.dispose();
                tweens.delete(tween);
            }
        });
    }

    pauseAllTweens (): void
    {
        this.paused = true;
    }

    resumeAllTweens (): void
    {
        this.paused = false;
    }

    destroy (): void
    {
        this.killAllTweens();
    }
}
