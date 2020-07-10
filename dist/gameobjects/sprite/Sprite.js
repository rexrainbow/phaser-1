import '../../GameInstance.js';
import '../../utils/NOOP.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/RectangleContains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../math/vec2/Vec2.js';
import '../../math/vec2/Vec2Callback.js';
import '../../math/matrix2d/CopyFrom.js';
import '../../config/const.js';
import '../../config/ConfigStore.js';
import '../../renderer/BindingQueue.js';
import '../../config/defaultorigin/GetDefaultOriginX.js';
import '../../config/defaultorigin/GetDefaultOriginY.js';
import '../../renderer/webgl1/renderpass/AddViewport.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/renderpass/BindViewport.js';
import '../../renderer/webgl1/renderpass/SetViewport.js';
import '../../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../../renderer/webgl1/renderpass/PopViewport.js';
import '../../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../../renderer/webgl1/renderpass/AddFramebuffer.js';
import '../../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../../renderer/webgl1/renderpass/Draw.js';
import '../../renderer/webgl1/renderpass/Flush.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import '../../renderer/webgl1/renderpass/GetVertexBufferEntry.js';
import '../../renderer/webgl1/renderpass/SetTexture.js';
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
import '../components/transform/UpdateLocalTransform.js';
import '../components/transform/UpdateWorldTransform.js';
import '../components/transform/TransformComponent.js';
import '../GameObject.js';
import { Container } from '../container/Container.js';
import { DrawTexturedQuad } from '../../renderer/canvas/draw/DrawTexturedQuad.js';
import { PackColors } from '../../renderer/webgl1/colors/PackColors.js';
import { SetFrame } from './SetFrame.js';
import { SetTexture } from './SetTexture.js';
import { UpdateVertices } from './UpdateVertices.js';
import '../../renderer/webgl1/colors/PackColor.js';
import { Vertex } from '../components/Vertex.js';

class Sprite extends Container {
    constructor(x, y, texture, frame) {
        super(x, y);
        this.hasTexture = false;
        this._tint = 0xffffff;
        this.type = 'Sprite';
        this.vertices = [new Vertex(), new Vertex(), new Vertex(), new Vertex()];
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
    renderGL(renderPass) {
        this.preRender();
        BatchTexturedQuad(this, renderPass);
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
            this.vertices.forEach(vertex => {
                vertex.setAlpha(value);
            });
            this.setDirty(DIRTY_CONST.COLORS);
        }
    }
    get tint() {
        return this._tint;
    }
    set tint(value) {
        if (value !== this._tint) {
            this._tint = value;
            this.vertices.forEach(vertex => {
                vertex.setTint(value);
            });
            this.setDirty(DIRTY_CONST.COLORS);
        }
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
        this.vertices = [];
    }
}

export { Sprite };
