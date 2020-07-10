import { AddedToWorldEvent } from '../gameobjects/events/AddedToWorldEvent.js';
import { RemovedFromWorldEvent } from '../gameobjects/events/RemovedFromWorldEvent.js';
import { Emit } from '../events/Emit.js';

function SetWorld3D(world, ...children) {
    children.forEach(child => {
        if (child.world) {
            Emit(child.world, RemovedFromWorldEvent, child, child.world);
            Emit(child, RemovedFromWorldEvent, child, child.world);
        }
        child.world = world;
        Emit(world, AddedToWorldEvent, child, world);
        Emit(child, AddedToWorldEvent, child, world);
    });
    return children;
}

export { SetWorld3D };
