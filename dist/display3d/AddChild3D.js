import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './DepthFirstSearch3D.js';
import './GetChild3DIndex.js';
import './RemoveChild3DAt.js';
import './RemoveChild3D.js';
import './SetWorld3D.js';
import { SetParent3D } from './SetParent3D.js';

function AddChild3D(parent, child) {
    parent.children.push(child);
    SetParent3D(parent, child);
    return child;
}

export { AddChild3D };
