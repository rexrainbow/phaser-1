import Game from '../Game';
import GameInstance from '../GameInstance';
import World from '../world/World';
import IScene from './IScene';
import ISceneConfig from './ISceneConfig';

export default class Scene implements IScene
{
    key: string;
    willUpdate: boolean = false;
    willRender: boolean = false;
    game: Game;
    world: World;

    constructor (config?: string | ISceneConfig)
    {
        this.game = GameInstance.get();

        this.world = new World(this);

        this.game.scenes.init(this, config);
    }

    boot ()
    {
    }

    update ()
    {
    }

    render ()
    {
    }

    shutdown ()
    {
    }

    destroy ()
    {
        this.world.destroy();

        this.world = null;
        this.game = null;
    }
}
