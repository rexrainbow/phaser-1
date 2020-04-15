import TransformGameObject from '../transformgameobject/TransformGameObject';
export default class Container extends TransformGameObject {
    constructor(x = 0, y = 0) {
        super(x, y);
        this._alpha = 1;
        this.children = [];
        this.isParent = true;
        this.type = 'Container';
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
    destroy(reparentChildren) {
        // if (reparentChildren)
        // {
        //     this.reparentChildren(reparentChildren);
        // }
        // else
        // {
        //     this.destroyChildren();
        // }
        this.children = null;
        super.destroy();
    }
    get numChildren() {
        return this.children.length;
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        if (value !== this._alpha) {
            this._alpha = value;
            this.setDirtyRender();
        }
    }
}
//# sourceMappingURL=Container.js.map