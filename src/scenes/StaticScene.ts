import Game from '../Game';
import GameInstance from '../GameInstance';
import ISceneConfig from './ISceneConfig';
import StaticWorld from '../world/StaticWorld';

export default class StaticScene
{
    key: string;
    willUpdate: boolean = false;
    willRender: boolean = false;
    game: Game;
    world: StaticWorld;

    constructor (config?: string | ISceneConfig)
    {
        this.game = GameInstance.get();

        this.world = new StaticWorld(this);

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
