import './DepthFirstSearch.js';
import './GetChildIndex.js';
import './RemoveChildAt.js';
import './RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './SetWorld.js';
import { SetParent } from './SetParent.js';

function AddChild(parent, child) {
    parent.children.push(child);
    SetParent(parent, child);
    child.transform.updateWorld();
    return child;
}

export { AddChild };
