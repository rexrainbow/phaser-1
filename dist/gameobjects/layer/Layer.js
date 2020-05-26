import '../../GameInstance.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/Contains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../utils/NOOP.js';
import '../../math/vec2/Vec2Callback.js';
import '../../config/DefaultOrigin.js';
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
import '../DIRTY_CONST.js';
import '../../display/RemoveChildrenBetween.js';
import '../../display/DestroyChildren.js';
import '../../display/ReparentChildren.js';
import '../components/transform/GetVertices.js';
import '../components/bounds/BoundsComponent.js';
import '../components/input/InputComponent.js';
import '../../math/vec2/Vec2.js';
import '../components/transform/UpdateLocalTransform.js';
import '../../math/matrix2d/Copy.js';
import '../components/transform/UpdateWorldTransform.js';
import '../components/transform/TransformComponent.js';
import { GameObject } from '../GameObject.js';

class Layer extends GameObject {
    constructor() {
        super();
        this.type = 'Layer';
        this.transform.passthru = true;
        this.willRender = false;
    }
}

export { Layer };
