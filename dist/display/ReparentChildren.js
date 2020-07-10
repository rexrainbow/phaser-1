import './DepthFirstSearch.js';
import './GetChildIndex.js';
import './RemoveChildAt.js';
import './RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './SetWorld.js';
import { SetParent } from './SetParent.js';
import { RemoveChildrenBetween } from './RemoveChildrenBetween.js';

function ReparentChildren(parent, newParent, beginIndex = 0, endIndex) {
    const moved = RemoveChildrenBetween(parent, beginIndex, endIndex);
    SetParent(newParent, ...moved);
    moved.forEach(child => {
        child.transform.updateWorld();
    });
    return moved;
}

export { ReparentChildren };
