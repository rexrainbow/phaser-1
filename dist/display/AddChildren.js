import './DepthFirstSearch.js';
import './GetChildIndex.js';
import './RemoveChildAt.js';
import './RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './SetWorld.js';
import './SetParent.js';
import { AddChild } from './AddChild.js';

function AddChildren(parent, ...children) {
    children.forEach(child => {
        AddChild(parent, child);
    });
    return children;
}

export { AddChildren };
