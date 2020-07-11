import {AddedToWorldEvent, RemovedFromWorldEvent} from "../gameobjects/events";
import {Emit as Emit2} from "../events/Emit";
export function SetWorld(world, ...children) {
  children.forEach((child) => {
    if (child.world) {
      Emit2(child.world, RemovedFromWorldEvent, child, child.world);
      Emit2(child, RemovedFromWorldEvent, child, child.world);
    }
    child.world = world;
    Emit2(world, AddedToWorldEvent, child, world);
    Emit2(child, AddedToWorldEvent, child, world);
  });
  return children;
}
