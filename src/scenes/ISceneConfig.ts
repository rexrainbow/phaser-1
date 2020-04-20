import { Game } from '../Game';

export interface ISceneConfig
{
    game?: Game;
    key?: string;
    willUpdate?: boolean;
    willRender?: boolean;
}
