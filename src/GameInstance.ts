import Game from './Game';

let gameInstance: Game;

function get ()
{
    return gameInstance;
}

function set (game: Game | null)
{
    gameInstance = game;
}

export default {
    get,
    set
}
