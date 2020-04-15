import Rectangle from '../../geom/Rectangle';
//  The Base Game Object which all Scene entites extend
export default class GameObject {
    constructor() {
        this.name = '';
        this.type = 'GameObject';
        this.willRender = true;
        this.willUpdate = true;
        this.dirtyRender = true;
        this.dirtyUpdate = true;
        this.dirtyFrame = 0;
        this.isParent = false;
        this.visible = true;
        this.inputEnabled = false;
        this.inputEnabledChildren = true;
        this.fixBounds = false;
        this.bounds = new Rectangle();
    }
    isRenderable() {
        return (this.visible && this.willRender);
    }
    setDirtyRender(setFrame = true) {
        this.dirtyRender = true;
        const scene = this.scene;
        if (setFrame && scene) {
            this.dirtyFrame = scene.game.frame;
        }
        return this;
    }
    setDirtyUpdate() {
        this.dirtyUpdate = true;
        return this;
    }
    getBounds(includeChildren = false) {
        return this.bounds;
    }
    setBounds(x, y, width, height) {
        this.bounds.set(x, y, width, height);
        return this;
    }
    update() {
    }
    updateTransform() {
        return this;
    }
    render() {
    }
    destroy(reparentChildren) {
        this.scene = null;
    }
}
//# sourceMappingURL=GameObject.js.map