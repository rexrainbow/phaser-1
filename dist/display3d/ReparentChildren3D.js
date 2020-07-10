import '../gameobjects/events/AddedToWorldEvent.js';
import '../gameobjects/events/RemovedFromWorldEvent.js';
import '../events/Emit.js';
import './DepthFirstSearch3D.js';
import './GetChild3DIndex.js';
import './RemoveChild3DAt.js';
import './RemoveChild3D.js';
import './SetWorld3D.js';
import { SetParent3D } from './SetParent3D.js';
import { RemoveChildren3DBetween } from './RemoveChildren3DBetween.js';

function ReparentChildren3D(parent, newParent, beginIndex = 0, endIndex) {
    const moved = RemoveChildren3DBetween(parent, beginIndex, endIndex);
    SetParent3D(newParent, ...moved);
    moved.forEach(child => {
    });
    return moved;
}

export { ReparentChildren3D };
