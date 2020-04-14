import Game from '../Game';
import GameInstance from '../GameInstance';
import World from './gameobjects/World';
import ISceneConfig from './ISceneConfig';

export default class Scene
{
    game: Game;
    world: World;

    constructor (config?: string | ISceneConfig)
    {
        this.game = GameInstance.get();

        this.game.scenes.init(this, config);
    }

    destroy ()
    {
        this.world.destroy();

        this.world = null;
        this.game = null;
    }
}
