import './DepthFirstSearch.js';
import './GetChildIndex.js';
import './RemoveChildAt.js';
import './RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './SetWorld.js';
import { SetParent } from './SetParent.js';

function AddChildrenAt(parent, index, ...children) {
    const parentChildren = parent.children;
    if (index >= 0 && index <= parentChildren.length) {
        children.reverse().forEach(child => {
            children.splice(index, 0, child);
            SetParent(parent, child);
            child.transform.updateWorld();
        });
    }
    return children;
}

export { AddChildrenAt };
