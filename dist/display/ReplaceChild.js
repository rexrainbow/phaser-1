import './DepthFirstSearch.js';
import { GetChildIndex } from './GetChildIndex.js';
import './RemoveChildAt.js';
import { RemoveChild } from './RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './SetWorld.js';
import './SetParent.js';
import { AddChildAt } from './AddChildAt.js';
import '../gameobjects/DIRTY_CONST.js';
import { MoveChildTo } from './MoveChildTo.js';

function ReplaceChild(target, source) {
    const targetParent = target.parent;
    const sourceParent = source.parent;
    const targetIndex = GetChildIndex(targetParent, target);
    if (targetParent === sourceParent) {
        MoveChildTo(targetParent, source, targetIndex);
        RemoveChild(targetParent, target);
    }
    else {
        RemoveChild(targetParent, target);
        RemoveChild(sourceParent, source);
        AddChildAt(targetParent, targetIndex, source);
    }
    return target;
}

export { ReplaceChild };
