import '../GameInstance.js';
import '../math/matrix2d/Matrix2D.js';
import '../geom/rectangle/Contains.js';
import '../geom/rectangle/Rectangle.js';
import '../utils/NOOP.js';
import '../math/vec2/Vec2Callback.js';
import { StaticCamera } from '../camera/StaticCamera.js';
import '../config/DefaultOrigin.js';
import '../display/DepthFirstSearch.js';
import '../display/GetChildIndex.js';
import '../display/RemoveChildAt.js';
import '../display/RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/DestroyEvent.js';
import '../gameobjects/events/PostUpdateEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../gameobjects/events/UpdateEvent.js';
import '../events/Emit.js';
import '../display/SetWorld.js';
import '../display/SetParent.js';
import '../gameobjects/DIRTY_CONST.js';
import '../display/RemoveChildrenBetween.js';
import '../display/DestroyChildren.js';
import '../display/RemoveChildren.js';
import '../display/ReparentChildren.js';
import '../events/EventInstance.js';
import '../events/Off.js';
import '../events/On.js';
import '../events/Once.js';
import '../gameobjects/components/transform/GetVertices.js';
import '../gameobjects/components/bounds/BoundsComponent.js';
import '../gameobjects/components/input/InputComponent.js';
import '../math/vec2/Vec2.js';
import '../gameobjects/components/transform/UpdateLocalTransform.js';
import '../math/matrix2d/Copy.js';
import '../gameobjects/components/transform/UpdateWorldTransform.js';
import '../gameobjects/components/transform/TransformComponent.js';
import '../gameobjects/GameObject.js';
import './events/WorldRenderEvent.js';
import './events/WorldShutdownEvent.js';
import './CalculateTotalRenderable.js';
import './HasDirtyChildren.js';
import './UpdateCachedLayers.js';
import './WorldDepthFirstSearch.js';
import './BuildRenderList.js';
import './MergeRenderData.js';
import './ResetWorldRenderData.js';
import { BaseWorld } from './BaseWorld.js';
import { CreateWorldRenderData } from './CreateWorldRenderData.js';

class StaticWorld extends BaseWorld {
    constructor(scene) {
        super(scene);
        this.type = 'StaticWorld';
        this.camera = new StaticCamera();
        this.renderData = CreateWorldRenderData(this.camera);
    }
}

export { StaticWorld };
