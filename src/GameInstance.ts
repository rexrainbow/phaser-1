import { Game } from './Game';

let gameInstance: Game;

export const GameInstance =
{
    get: (): Game =>
    {
        return gameInstance;
    },

    set: (game: Game | null): void =>
    {
        gameInstance = game;
    }
};
