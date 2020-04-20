import { GetScenes } from '../config';
import { Game } from '../Game';
import { GameInstance } from '../GameInstance';
import { GetConfigValue } from './GetConfigValue';
import { IScene } from './IScene';
import { ISceneConfig } from './ISceneConfig';
import { ISceneRenderData } from './ISceneRenderData';

export class SceneManager
{
    game: Game;

    scenes: Map<string, IScene>  = new Map();

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
        GetScenes().forEach(scene => new scene());
    }

    init (scene: IScene, config: string | ISceneConfig = {})
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
        const results = this.renderResult;

        results.numTotalFrames = 0;
        results.numDirtyFrames = 0;
        results.numDirtyCameras = 0;
        results.numRenderedWorlds = 0;

        for (let scene of this.scenes.values())
        {
            if (scene.willRender)
            {
                let world = scene.world;

                results.numDirtyFrames += world.render(gameFrame);
                results.numTotalFrames += world.numRendered;

                if (world.rendered.length === 0)
                {
                    continue;
                }

                if (world.camera.dirtyRender)
                {
                    results.numDirtyCameras++;

                    world.camera.dirtyRender = false;
                }

                let renderListSize = results.renderedWorlds.length;

                if (renderListSize <= results.numRenderedWorlds)
                {
                    renderListSize++;

                    results.renderedWorlds.push({
                        camera: world.camera,
                        rendered: world.rendered,
                        numRendered: world.numRendered
                    });
                }
                else
                {
                    const renderData = results.renderedWorlds[results.numRenderedWorlds];

                    renderData.camera = world.camera;
                    renderData.rendered = world.rendered;
                    renderData.numRendered = world.numRendered;
                }

                results.numRenderedWorlds++;
            }
        }

        if (this.flush)
        {
            //  Invalidate the renderer cache
            results.numDirtyFrames++;

            //  And reset
            this.flush = false;
        }

        return results;
    }
}
