import GameInstance from '../GameInstance';
import StaticWorld from '../world/StaticWorld';
export default class StaticScene {
    constructor(config) {
        this.willUpdate = false;
        this.willRender = false;
        this.game = GameInstance.get();
        this.world = new StaticWorld(this);
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
//# sourceMappingURL=StaticScene.js.map