import '../GameInstance.js';
import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/mat4/Matrix4.js';
import '../math/mat4/FromRotationTranslationScale.js';
import '../math/vec3/Vec3.js';
import '../math/quaternion/Quaternion.js';
import '../math/mat4/Invert.js';
import '../math/mat4/Multiply.js';
import '../math/mat4/Transpose.js';
import '../math/vec3/Backward.js';
import '../math/vec3/Down.js';
import '../math/vec3/Forward.js';
import '../math/vec3/Left.js';
import '../math/vec3/Right.js';
import '../math/vec3/Up.js';
import '../math/vec3/Zero.js';
import '../math/vec3/const.js';
import '../math/vec3/Scale.js';
import '../math/vec3/TransformMat4.js';
import '../math/vec3/Project.js';
import '../math/vec3/Vec3Callback.js';
import '../math/vec3/Unproject.js';
import '../math/quaternion/RotateX.js';
import '../math/quaternion/RotateY.js';
import '../math/quaternion/RotateZ.js';
import { DestroyEvent } from '../gameobjects/events/DestroyEvent.js';
import { PostUpdateEvent } from '../gameobjects/events/PostUpdateEvent.js';
import { UpdateEvent } from '../gameobjects/events/UpdateEvent.js';
import { Emit } from '../events/Emit.js';
import '../gameobjects/DIRTY_CONST.js';
import '../display3d/GetChild3DIndex.js';
import '../display3d/RemoveChild3DAt.js';
import '../display3d/RemoveChild3D.js';
import { RemoveChildren3D } from '../display3d/RemoveChildren3D.js';
import '../events/EventInstance.js';
import { Off } from '../events/Off.js';
import { On } from '../events/On.js';
import { Once } from '../events/Once.js';
import '../gameobjects3d/components/transform3d/Transform3DComponent.js';
import { GameObject3D } from '../gameobjects3d/GameObject3D.js';
import { World3DRenderEvent } from './events/World3DRenderEvent.js';
import { World3DShutdownEvent } from './events/World3DShutdownEvent.js';
import './CalculateTotalRenderable.js';
import './HasDirtyChildren.js';
import './UpdateCachedLayers.js';
import './WorldDepthFirstSearch.js';
import { BuildRenderList } from './BuildRenderList.js';
import { MergeRenderData } from './MergeRenderData.js';
import { ResetWorld3DRenderData } from './ResetWorld3DRenderData.js';

class BaseWorld3D extends GameObject3D {
    constructor(scene) {
        super();
        this.forceRefresh = false;
        this.is3D = true;
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
        ResetWorld3DRenderData(renderData, sceneRenderData.gameFrame);
        if (!this.willRender || !this.visible) {
            return;
        }
        BuildRenderList(this);
        Emit(this, World3DRenderEvent, renderData, this);
        MergeRenderData(sceneRenderData, renderData);
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
    shutdown() {
        const scene = this.scene;
        Off(scene, 'update', this._updateListener);
        Off(scene, 'render', this._renderListener);
        Off(scene, 'shutdown', this._shutdownListener);
        RemoveChildren3D(this);
        Emit(this, World3DShutdownEvent, this);
        ResetWorld3DRenderData(this.renderData, 0);
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        Emit(this, DestroyEvent, this);
        ResetWorld3DRenderData(this.renderData, 0);
        this.events.clear();
        this.camera = null;
        this.renderData = null;
        this.events = null;
    }
}

export { BaseWorld3D };
