import { Game } from '..';
import { IWorld } from '../world/IWorld';

export interface IScene
{
    key?: string;
    willUpdate?: boolean;
    willRender?: boolean;
    game: Game;
    world: IWorld;
    boot (): void;
    update (delta: number, time: number): void;
    render (gameFrame: number): void;
    shutdown (): void;
    destroy (): void;
}
