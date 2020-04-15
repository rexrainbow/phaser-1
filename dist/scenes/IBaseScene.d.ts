import Game from '../Game';
export default interface IBaseScene {
    key: string;
    willUpdate: boolean;
    willRender: boolean;
    game: Game;
    world: any;
    boot(): void;
    update(delta: number, time: number): void;
    render(gameFrame: number): void;
    shutdown(): void;
    destroy(): void;
}
//# sourceMappingURL=IBaseScene.d.ts.map