import { DepthFirstSearch } from './DepthFirstSearch.js';
import './GetChildIndex.js';
import './RemoveChildAt.js';
import { RemoveChild } from './RemoveChild.js';
import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import { SetWorld } from './SetWorld.js';

function SetParent(parent, ...children) {
    children.forEach(child => {
        if (child.parent) {
            RemoveChild(child.parent, child);
        }
        child.parent = parent;
    });
    const parentWorld = parent.world;
    if (parentWorld) {
        SetWorld(parentWorld, ...DepthFirstSearch(parent));
    }
    return children;
}

export { SetParent };
