import { Game } from './Game';

let instance: Game;

export const GameInstance =
{
    get: (): Game =>
    {
        return instance;
    },

    set: (game: Game | undefined): void =>
    {
        instance = game;
    }
};
