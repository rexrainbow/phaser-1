import { GetScenes } from '../config';
import Game from '../Game';
import GameInstance from '../GameInstance';
import { IWorldRenderResult } from '../world/World';
import GetConfigValue from './GetConfigValue';
import IBaseScene from './IBaseScene';
import IBaseSceneConstructor from './IBaseSceneConstructor';
import ISceneConfig from './ISceneConfig';

export interface ISceneRenderData {
    //  How many Cameras were made dirty this frame across all Scenes?
    numDirtyCameras: number,

    //  How many Game Objects were made dirty this frame across all Scenes?
    numDirtyFrames: number,

    //  How many Game Objects were processed this frame across all Scenes?
    numTotalFrames: number,

    renderedWorlds: IWorldRenderResult[],

    //  How many objects inside the circular array renderList?
    numRenderedWorlds: number
}

export default class SceneManager
{
    game: Game;

    scenes: Map<string, IBaseScene>  = new Map();

    sceneIndex: number = 0;

    //  Flush the cache
    flush: boolean = false;

    renderResult: ISceneRenderData = {
        numDirtyCameras: 0,
        numDirtyFrames: 0,
        numTotalFrames: 0,
        renderedWorlds: [],
        numRenderedWorlds: 0
    };

    constructor ()
    {
        this.game = GameInstance.get()
        this.game.once('boot', this.boot);
    }

    boot = () =>
    {
        const scenes = GetScenes();

        scenes.forEach(scene => {

            this.add(scene);

        });
    }

    add (scene: IBaseSceneConstructor)
    {
        const instance = new scene();

        //  At this point the act of creating a new instance of the Scene
        //  will have invoked the init method below, so we can now safely
        //  add the Scene into our Map

        if (instance.willUpdate)
        {
            instance.boot.call(instance);
        }
    }

    init (scene: IBaseScene, config: string | ISceneConfig = {})
    {
        const size = this.scenes.size;
        const sceneIndex = this.sceneIndex;
        const firstScene = (size === 0);

        if (typeof config === 'string')
        {
            scene.key = config;
        }
        else if (config || (!config && firstScene))
        {
            scene.key = GetConfigValue(config, 'key', 'scene' + sceneIndex);
            scene.willUpdate = GetConfigValue(config, 'willUpdate', firstScene);
            scene.willRender = GetConfigValue(config, 'willRender', firstScene);
        }

        if (this.scenes.has(scene.key))
        {
            console.warn('Scene key already in use: ' + scene.key);
        }
        else
        {
            this.scenes.set(scene.key, scene);

            this.flush = true;

            this.sceneIndex++;
        }
    }

    update (delta: number, now: number)
    {
        for (const scene of this.scenes.values())
        {
            if (scene.willUpdate)
            {
                scene.update.call(scene, delta, now);

                scene.world.update(delta, now);
            }
        }
    }

    render (gameFrame: number): ISceneRenderData
    {
        this.renderResult.numTotalFrames = 0;
        this.renderResult.numDirtyFrames = 0;
        this.renderResult.numDirtyCameras = 0;
        this.renderResult.numRenderedWorlds = 0;

        for (let scene of this.scenes.values())
        {
            if (scene.willRender)
            {
                let world = scene.world;

                this.renderResult.numDirtyFrames += world.render(gameFrame);
                this.renderResult.numTotalFrames += world.numRendered;

                if (world.rendered.length === 0)
                {
                    continue;
                }

                if (world.camera.dirtyRender)
                {
                    this.renderResult.numDirtyCameras++;

                    world.camera.dirtyRender = false;
                }

                let renderListSize = this.renderResult.renderedWorlds.length;
                if (renderListSize <= this.renderResult.numRenderedWorlds) {
                    renderListSize++;
                    this.renderResult.renderedWorlds.push({
                        camera: world.camera,
                        rendered: world.rendered,
                        numRendered: world.numRendered
                    });
                } else {
                    const renderData = this.renderResult.renderedWorlds[this.renderResult.numRenderedWorlds];
                    renderData.camera = world.camera;
                    renderData.rendered = world.rendered;
                    renderData.numRendered = world.numRendered;
                }
                this.renderResult.numRenderedWorlds++;
            }
        }

        if (this.flush)
        {
            //  Invalidate the renderer cache
            this.renderResult.numDirtyFrames++;

            //  And reset
            this.flush = false;
        }

        return this.renderResult;
    }
}
