import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './DepthFirstSearch3D.js';
import './GetChild3DIndex.js';
import './RemoveChild3DAt.js';
import './RemoveChild3D.js';
import './SetWorld3D.js';
import { SetParent3D } from './SetParent3D.js';

function AddChildren3DAt(parent, index, ...children) {
    const parentChildren = parent.children;
    if (index >= 0 && index <= parentChildren.length) {
        children.reverse().forEach(child => {
            children.splice(index, 0, child);
            SetParent3D(parent, child);
        });
    }
    return children;
}

export { AddChildren3DAt };
