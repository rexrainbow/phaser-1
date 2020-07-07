import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import { DepthFirstSearch3D } from './DepthFirstSearch3D.js';
import './GetChild3DIndex.js';
import './RemoveChild3DAt.js';
import { RemoveChild3D } from './RemoveChild3D.js';
import { SetWorld3D } from './SetWorld3D.js';

function SetParent3D(parent, ...children) {
    children.forEach(child => {
        if (child.parent) {
            RemoveChild3D(child.parent, child);
        }
        child.parent = parent;
    });
    const parentWorld = parent.world;
    if (parentWorld) {
        SetWorld3D(parentWorld, ...DepthFirstSearch3D(parent));
    }
    return children;
}

export { SetParent3D };
