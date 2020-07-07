import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import '../gameobjects/DIRTY_CONST.js';
import './DepthFirstSearch3D.js';
import { GetChild3DIndex } from './GetChild3DIndex.js';
import './RemoveChild3DAt.js';
import { RemoveChild3D } from './RemoveChild3D.js';
import './SetWorld3D.js';
import './SetParent3D.js';
import { AddChild3DAt } from './AddChild3DAt.js';
import { MoveChild3DTo } from './MoveChild3DTo.js';

function ReplaceChild3D(target, source) {
    const targetParent = target.parent;
    const sourceParent = source.parent;
    const targetIndex = GetChild3DIndex(targetParent, target);
    if (targetParent === sourceParent) {
        MoveChild3DTo(targetParent, source, targetIndex);
        RemoveChild3D(targetParent, target);
    }
    else {
        RemoveChild3D(targetParent, target);
        RemoveChild3D(sourceParent, source);
        AddChild3DAt(targetParent, targetIndex, source);
    }
    return target;
}

export { ReplaceChild3D };
