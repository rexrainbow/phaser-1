import { Emit, Once } from '../events';

import { CreateSceneRenderData } from './CreateSceneRenderData';
import { Game } from '../Game';
import { GameInstance } from '../GameInstance';
import { GetScenes } from '../config';
import { IScene } from './IScene';
import { ISceneRenderData } from './ISceneRenderData';
import { ResetSceneRenderData } from './ResetSceneRenderData';
import { SceneManagerInstance } from './SceneManagerInstance';

export class SceneManager
{
    game: Game;

    scenes: Map<string, IScene>  = new Map();

    sceneIndex: number = 0;

    //  Flush the cache
    flush: boolean = false;

    renderResult: ISceneRenderData = CreateSceneRenderData();

    constructor ()
    {
        this.game = GameInstance.get();

        SceneManagerInstance.set(this);

        Once(this.game, 'boot', () => this.boot());
    }

    boot (): void
    {
        GetScenes().forEach(scene => new scene());
    }

    update (delta: number, now: number): void
    {
        for (const scene of this.scenes.values())
        {
            Emit(scene, 'update', delta, now);
        }
    }

    render (gameFrame: number): ISceneRenderData
    {
        const results = this.renderResult;

        ResetSceneRenderData(results, gameFrame);

        for (const scene of this.scenes.values())
        {
            Emit(scene, 'render', results);

            /*
            if (scene.willRender)
            {
                scene.render.call(scene, results);

                const world = scene.world;

                if (!world)
                {
                    continue;
                }

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
            */
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
