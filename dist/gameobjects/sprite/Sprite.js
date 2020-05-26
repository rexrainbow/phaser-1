import '../../GameInstance.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/Contains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../utils/NOOP.js';
import '../../math/vec2/Vec2Callback.js';
import '../../renderer/BindingQueue.js';
import '../../config/DefaultOrigin.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import '../../display/DepthFirstSearch.js';
import '../../display/GetChildIndex.js';
import '../../display/RemoveChildAt.js';
import '../../display/RemoveChild.js';
import '../events/AddedToWorldEvent.js';
import '../events/DestroyEvent.js';
import '../events/RemovedFromWorldEvent.js';
import '../../events/Emit.js';
import '../../display/SetWorld.js';
import '../../display/SetParent.js';
import { DIRTY_CONST } from '../DIRTY_CONST.js';
import '../../display/RemoveChildrenBetween.js';
import '../../display/DestroyChildren.js';
import '../../display/ReparentChildren.js';
import '../../textures/TextureManagerInstance.js';
import { BatchTexturedQuad } from '../../renderer/webgl1/draw/BatchTexturedQuad.js';
import '../components/transform/GetVertices.js';
import '../components/bounds/BoundsComponent.js';
import '../components/input/InputComponent.js';
import '../../math/vec2/Vec2.js';
import '../components/transform/UpdateLocalTransform.js';
import '../../math/matrix2d/Copy.js';
import '../components/transform/UpdateWorldTransform.js';
import '../components/transform/TransformComponent.js';
import '../GameObject.js';
import { Container } from '../container/Container.js';
import { DrawTexturedQuad } from '../../renderer/canvas/draw/DrawTexturedQuad.js';
import '../../renderer/webgl1/colors/PackColor.js';
import { PackColors } from '../../renderer/webgl1/colors/PackColors.js';
import { SetFrame } from './SetFrame.js';
import { SetTexture } from './SetTexture.js';
import { UpdateVertices } from './UpdateVertices.js';

class Sprite extends Container {
    constructor(x, y, texture, frame) {
        super(x, y);
        this.hasTexture = false;
        this._tint = 0xffffff;
        this.type = 'Sprite';
        this.vertexData = new Float32Array(24).fill(0);
        this.vertexColor = new Uint32Array(4).fill(4294967295);
        this.vertexAlpha = new Float32Array(4).fill(1);
        this.vertexTint = new Uint32Array(4).fill(0xffffff);
        this.setTexture(texture, frame);
    }
    setTexture(key, frame) {
        SetTexture(key, frame, this);
        return this;
    }
    setFrame(key) {
        SetFrame(this.texture, key, this);
        return this;
    }
    isRenderable() {
        return (this.visible && this.willRender && this.hasTexture && this.alpha > 0);
    }
    preRender() {
        if (this.isDirty(DIRTY_CONST.COLORS)) {
            PackColors(this);
            this.clearDirty(DIRTY_CONST.COLORS);
        }
        if (this.isDirty(DIRTY_CONST.TRANSFORM)) {
            UpdateVertices(this);
            this.clearDirty(DIRTY_CONST.TRANSFORM);
        }
    }
    renderGL(renderer) {
        this.preRender();
        BatchTexturedQuad(this, renderer);
    }
    renderCanvas(renderer) {
        this.preRender();
        DrawTexturedQuad(this, renderer);
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        if (value !== this._alpha) {
            this._alpha = value;
            const vertexAlpha = this.vertexAlpha;
            vertexAlpha[0] = value;
            vertexAlpha[1] = value;
            vertexAlpha[2] = value;
            vertexAlpha[3] = value;
            this.setDirty(DIRTY_CONST.ALPHA);
        }
    }
    get tint() {
        return this._tint;
    }
    set tint(value) {
        if (value !== this._tint) {
            this._tint = value;
            const vertexTint = this.vertexTint;
            vertexTint[0] = value;
            vertexTint[1] = value;
            vertexTint[2] = value;
            vertexTint[3] = value;
            this.setDirty(DIRTY_CONST.COLORS);
        }
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
        this.vertexData = null;
        this.vertexColor = null;
        this.vertexAlpha = null;
        this.vertexTint = null;
    }
}

export { Sprite };
