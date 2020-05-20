import * as Easing from '../src/math/easing/';

import { AddChild, AddChildren } from '../src/display/';
import { BackgroundColor, Parent, Scenes, Size, WebGLRenderer } from '../src/config';

import { Game } from '../src/Game';
import { IBaseWorld } from '../src/world/IBaseWorld';
import { IEventInstance } from '../src/events/IEventInstance';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
import { On } from '../src/events';
import { Quadratic } from '../src/math/easing/';
import { Scene } from '../src/scenes/Scene';
import { Sprite } from '../src/gameobjects/';
import { StaticWorld } from '../src/world/StaticWorld';

class TweenProperty
{
	name: string;
	start: number;
	end: number;
	current: number;

	constructor (name: string, end: number)
	{
		this.name = name;
        this.end = end;
	}

	init (target: object, reversed: boolean): void
	{
		if (reversed)
		{
			this.start = this.end;
			this.end = target[this.name];

            target[this.name] = this.start;
		}
        else
        {
            this.start = target[this.name];
        }

        this.current = this.start;
    }

    update (target: object, v: number): void
    {
        this.current = this.start + ((this.end - this.start) * v);

        target[this.name] = this.current;
    }
}

class Tween
{
    static defaultEase: Function = Quadratic.Out;

    private static tweens: Map<any, Tween> = new Map();
    private static world: IBaseWorld;
    private static _updateListener: IEventInstance;

    private isDead: boolean = false;
    private target: object;
    private reversed: boolean;
    private overwrite: boolean;
    private autoStart: boolean;
    private delay: number = 0;
    private duration: number = 0;
    private elapsed: number = 0;
    private _delayElapsed: number = 0;
    private _durationElapsed: number = 0;
    private ease: Function;
    private properties: TweenProperty[] = [];
    private autoVisible: boolean;

    progress: number = 0;
    isRunning: boolean;

    constructor (target: Object, autoStart: boolean = true)
    {
        this.target = target;
        this.autoStart = autoStart;
        this.ease = Tween.defaultEase;
        this.isRunning = false;
    }

    static init (world: IBaseWorld): void
    {
        this.world = world;

        this._updateListener = On(world.scene, 'update', (delta: number) => this.updateTweens(delta));
    }

    static updateTweens (delta: number): void
    {
        for (const [ target, tween ] of this.tweens)
        {
            if (tween.update(delta))
            {
                this.tweens.delete(target);
            }
        }
    }

    static killAllTweens (): void
    {
    }

    static killTweensOf (target: unknown): void
    {
    }

    static pauseAllTweens (): void
    {
    }

    static resumeAllTweens (): void
    {
    }

    to (duration: number, toState: Object = null, overwrite: boolean = true): Tween
    {
        return this.add(duration, toState, overwrite);
    }

    from (duration: number, fromState: Object = null, overwrite: boolean = true): Tween
    {
        return this.add(duration, fromState, overwrite, true);
    }

    private add (duration: number, state: Object, overwrite: boolean, reversed: boolean = false): Tween
    {
        if (this.isDead)
        {
            return new Tween(this.target).add(duration, state, overwrite, reversed);
        }

        //  Tween already configured - add to chain?
        for (let name in state)
        {
            let value = state[name];

            this.properties.push(new TweenProperty(name, value));
        }

        this.duration = duration * 1000;
        this.reversed = reversed;
        this.overwrite = overwrite;

        if (this.autoStart)
        {
            this.start();
        }

        return this;
    }

    start (): void
    {
        if (this.isRunning)
        {
            return;
        }

        this.properties.forEach(property =>
        {
            property.init(this.target, this.reversed);
        });

        this._delayElapsed = this.delay;
        this._durationElapsed = this.duration;
        this.elapsed = 0;

        this.isRunning = true;

        Tween.tweens.set(this.target, this);

        this.update(0);
    }

    //  If it returns true it means this Tween has been disposed
    update (delta: number): boolean
    {
        if (!this.isRunning)
        {
            return false;
        }

        if (this._delayElapsed > 0)
        {
            this._delayElapsed -= delta;

            if (this._delayElapsed <= 0)
            {
                //  Carry over the difference to the duration
                this.elapsed = Math.abs(this._delayElapsed);
                this._delayElapsed = 0;
            }
        }
        else
        {
            this.elapsed += delta;
            this.progress = Math.min(this.elapsed / this.duration, 1);

            // const v = (this.reversed) ? this.ease(1 - this.progress) : this.ease(this.progress);
            const v = this.ease(this.progress);

            this.properties.forEach(property =>
            {
                property.update(this.target, v);
            });

            if (this.progress === 1)
            {
                this.dispose();

                return true;
            }
        }

        return false;
    }

    easing (f: Function): this
    {
        this.ease = f || Tween.defaultEase;

        return this;
    }

    dispose (): void
    {
        this.isDead = true;
        this.target = null;
        this.properties = null;
        this.ease = null;
        this.isRunning = false;
    }
}

function Tweens (target: Object): Tween
{
    return new Tween(target);
}

class Demo extends Scene
{
    constructor ()
    {
        super();

        const world = new StaticWorld(this);

        Tween.init(world);

        const loader = new Loader();

        loader.setPath('/phaser4-examples/public/assets/');
        // loader.setPath('/examples/public/assets/');

        loader.add(ImageFile('logo', 'logo.png'));
        loader.add(ImageFile('rocket', 'rocket.png'));
        loader.add(ImageFile('star', 'star.png'));
        loader.add(ImageFile('bubble', 'bubble256.png'));

        loader.start().then(() => {

            const logo = new Sprite(400, 100, 'logo').setRotation(0.5);
            const rocket = new Sprite(-200, 300, 'rocket');

            // Tweens(logo).from(3, { y: 500, rotation: 0 });

            Tweens(logo).to(3, { y: 500, rotation: 0 }).easing(Easing.Bounce.Out);
            Tweens(rocket).to(1.5, { x: 950 }).easing(Easing.Quadratic.In);

            AddChildren(world, logo, rocket);

        });

    }
}

export default function (): void
{
    new Game(
        WebGLRenderer(),
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}
