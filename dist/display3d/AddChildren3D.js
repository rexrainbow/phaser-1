import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './DepthFirstSearch3D.js';
import './GetChild3DIndex.js';
import './RemoveChild3DAt.js';
import './RemoveChild3D.js';
import './SetWorld3D.js';
import './SetParent3D.js';
import { AddChild3D } from './AddChild3D.js';

function AddChildren3D(parent, ...children) {
    children.forEach(child => {
        AddChild3D(parent, child);
    });
    return children;
}

export { AddChildren3D };
