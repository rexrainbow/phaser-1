import Game from '../Game';
import IWorld from '../world/IWorld';

export default interface IBaseScene
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
