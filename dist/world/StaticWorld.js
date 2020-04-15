import StaticCamera from '../camera/StaticCamera';
import Matrix2D from '../math/matrix2d/Matrix2D';
//  A Static World is designed specifically to have a bounds of a fixed size
//  and a camera that doesn't move at all (no scrolling, rotation, etc)
//  Because it has a fixed size, there is no camera culling enabled.
//  Games that use this kind of world include Pacman, Bejeweled and 2048.
export default class StaticWorld {
    constructor(scene) {
        //  How many Game Objects were made dirty this frame?
        this.dirtyFrame = 0;
        //  How many Game Objects will be rendered this frame? (are in-bounds)
        this.totalFrame = 0;
        //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
        this.visibleFrame = 0;
        this.forceRefresh = false;
        this.scene = scene;
        this.children = [];
        this.renderList = [];
        this.worldTransform = new Matrix2D();
        this.camera = new StaticCamera(scene);
    }
    scanChildren(root, gameFrame) {
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
            this.buildRenderList(children[i], gameFrame);
        }
    }
    buildRenderList(root, gameFrame) {
        if (root.isRenderable()) {
            this.renderList.push(root);
            if (root.dirtyFrame >= gameFrame) {
                this.dirtyFrame++;
            }
            this.visibleFrame++;
        }
        if (root.isParent && root.visible) {
            this.scanChildren(root, gameFrame);
        }
    }
    update(delta, time) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child && child.willUpdate) {
                child.update(delta, time);
            }
        }
    }
    render(gameFrame) {
        this.dirtyFrame = 0;
        this.visibleFrame = 0;
        this.renderList.length = 0;
        this.scanChildren(this, gameFrame);
        this.totalFrame = this.renderList.length;
        if (this.forceRefresh) {
            this.dirtyFrame++;
            this.forceRefresh = false;
        }
        return this.dirtyFrame;
    }
    shutdown() {
        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage
        // this.removeChildren();
        this.renderList = [];
        this.camera.reset();
    }
    destroy() {
        this.camera.destroy();
        this.camera = null;
        this.renderList = null;
    }
    get numChildren() {
        return this.children.length;
    }
}
//# sourceMappingURL=StaticWorld.js.map