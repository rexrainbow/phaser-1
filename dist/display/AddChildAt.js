import './DepthFirstSearch.js';
import './GetChildIndex.js';
import './RemoveChildAt.js';
import './RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './SetWorld.js';
import { SetParent } from './SetParent.js';

function AddChildAt(parent, index, child) {
    const children = parent.children;
    if (index >= 0 && index <= children.length) {
        SetParent(parent, child);
        children.splice(index, 0, child);
        child.transform.updateWorld();
    }
    return child;
}

export { AddChildAt };
