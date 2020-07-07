import '../GameInstance.js';
import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/matrix2d/Matrix2D.js';
import '../geom/rectangle/Contains.js';
import '../geom/rectangle/Rectangle.js';
import '../math/vec2/Vec2.js';
import '../math/vec2/Vec2Callback.js';
import '../math/matrix2d/CopyFrom.js';
import { ExactEquals } from '../math/matrix2d/ExactEquals.js';
import '../config/DefaultOrigin.js';
import '../renderer/webgl1/renderpass/AddViewport.js';
import '../renderer/webgl1/GL.js';
import '../renderer/webgl1/renderpass/BindViewport.js';
import '../renderer/webgl1/renderpass/SetViewport.js';
import '../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../renderer/webgl1/renderpass/PopViewport.js';
import '../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../renderer/webgl1/renderpass/AddFramebuffer.js';
import '../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../renderer/webgl1/renderpass/Draw.js';
import { Flush } from '../renderer/webgl1/renderpass/Flush.js';
import '../renderer/webgl1/renderpass/BindShader.js';
import { Begin } from '../renderer/webgl1/renderpass/Begin.js';
import '../display/DepthFirstSearch.js';
import '../display/GetChildIndex.js';
import '../display/RemoveChildAt.js';
import '../display/RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import { DestroyEvent } from '../gameobjects/events/DestroyEvent.js';
import { PostUpdateEvent } from '../gameobjects/events/PostUpdateEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import { UpdateEvent } from '../gameobjects/events/UpdateEvent.js';
import { Emit } from '../events/Emit.js';
import '../display/SetWorld.js';
import '../display/SetParent.js';
import '../gameobjects/DIRTY_CONST.js';
import '../display/RemoveChildrenBetween.js';
import '../display/DestroyChildren.js';
import { RemoveChildren } from '../display/RemoveChildren.js';
import '../display/ReparentChildren.js';
import '../events/EventInstance.js';
import { Off } from '../events/Off.js';
import { On } from '../events/On.js';
import { Once } from '../events/Once.js';
import '../gameobjects/components/transform/GetVertices.js';
import '../gameobjects/components/bounds/BoundsComponent.js';
import '../gameobjects/components/input/InputComponent.js';
import '../gameobjects/components/transform/UpdateLocalTransform.js';
import '../gameobjects/components/transform/UpdateWorldTransform.js';
import '../gameobjects/components/transform/TransformComponent.js';
import { GameObject } from '../gameobjects/GameObject.js';
import { WorldRenderEvent } from './events/WorldRenderEvent.js';
import { WorldShutdownEvent } from './events/WorldShutdownEvent.js';
import './CalculateTotalRenderable.js';
import './HasDirtyChildren.js';
import './UpdateCachedLayers.js';
import './WorldDepthFirstSearch.js';
import { BuildRenderList } from './BuildRenderList.js';
import { MergeRenderData } from './MergeRenderData.js';
import { ResetWorldRenderData } from './ResetWorldRenderData.js';

class BaseWorld extends GameObject {
    constructor(scene) {
        super();
        this.forceRefresh = false;
        this.is3D = false;
        this.type = 'BaseWorld';
        this.scene = scene;
        this.world = this;
        this.events = new Map();
        this.renderList = [];
        this._updateListener = On(scene, 'update', (delta, time) => this.update(delta, time));
        this._renderListener = On(scene, 'render', (renderData) => this.render(renderData));
        this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
        Once(scene, 'destroy', () => this.destroy());
    }
    update(delta, time) {
        if (!this.willUpdate) {
            return;
        }
        Emit(this, UpdateEvent, delta, time, this);
        super.update(delta, time);
    }
    postUpdate(delta, time) {
        Emit(this, PostUpdateEvent, delta, time, this);
    }
    render(sceneRenderData) {
        const renderData = this.renderData;
        ResetWorldRenderData(renderData, sceneRenderData.gameFrame);
        if (!this.willRender || !this.visible) {
            return;
        }
        BuildRenderList(this);
        Emit(this, WorldRenderEvent, renderData, this);
        MergeRenderData(sceneRenderData, renderData);
        this.camera.dirtyRender = false;
    }
    renderGL(renderPass) {
        const currentCamera = renderPass.current2DCamera;
        const camera = this.camera;
        if (!currentCamera || !ExactEquals(camera.worldTransform, currentCamera.worldTransform)) {
            Flush(renderPass);
        }
        Begin(renderPass, camera);
        this.renderList.forEach(entry => {
            if (entry.children.length > 0) {
                this.renderNode(entry, renderPass);
            }
            else {
                entry.node.renderGL(renderPass);
            }
        });
    }
    renderNode(entry, renderPass) {
        entry.node.renderGL(renderPass);
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                this.renderNode(child, renderPass);
            }
            else {
                child.node.renderGL(renderPass);
            }
        });
        entry.node.postRenderGL(renderPass);
    }
    postRenderGL(renderPass) {
    }
    shutdown() {
        const scene = this.scene;
        Off(scene, 'update', this._updateListener);
        Off(scene, 'render', this._renderListener);
        Off(scene, 'shutdown', this._shutdownListener);
        RemoveChildren(this);
        Emit(this, WorldShutdownEvent, this);
        ResetWorldRenderData(this.renderData, 0);
        if (this.camera) {
            this.camera.reset();
        }
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        Emit(this, DestroyEvent, this);
        ResetWorldRenderData(this.renderData, 0);
        if (this.camera) {
            this.camera.destroy();
        }
        this.events.clear();
        this.camera = null;
        this.renderData = null;
        this.events = null;
    }
}

export { BaseWorld };
