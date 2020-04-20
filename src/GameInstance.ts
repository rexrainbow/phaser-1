import { Game } from './Game';

let gameInstance: Game;

export const GameInstance = {

    get: () =>
    {
        return gameInstance;
    },
    
    set: (game: Game | null) =>
    {
        gameInstance = game;
    }
    
}
