import GameInstance from '../GameInstance';
import World from '../world/World';
export default class Scene {
    constructor(config) {
        this.willUpdate = false;
        this.willRender = false;
        this.game = GameInstance.get();
        this.world = new World(this);
        this.game.scenes.init(this, config);
    }
    boot() {
    }
    update() {
    }
    render() {
    }
    shutdown() {
    }
    destroy() {
        this.world.destroy();
        this.world = null;
        this.game = null;
    }
}
//# sourceMappingURL=Scene.js.map