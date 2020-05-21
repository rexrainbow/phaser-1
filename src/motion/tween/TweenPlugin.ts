import { IBaseWorld } from '../../world/IBaseWorld';
import { ITweenPlugin } from './ITweenPlugin';
import { Tween } from './Tween';
import { WorldPlugin } from '../../world/WorldPlugin';

export class TweenPlugin extends WorldPlugin implements ITweenPlugin
{
    static key: string = 'TweenPlugin';

    private tweens: Set<Tween> = new Set();
    private paused: boolean = false;

    timeScale: number = 1;

    constructor (world: IBaseWorld)
    {
        super(world);
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

    static toString (): string
    {
        return TweenPlugin.key;
    }

    destroy (): void
    {
        this.killAllTweens();
    }
}
