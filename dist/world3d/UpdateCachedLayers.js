import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
import {HasDirtyChildren as HasDirtyChildren2} from "./HasDirtyChildren";
export function UpdateCachedLayers(cachedLayers, dirtyCamera) {
  cachedLayers.forEach((layer) => {
    if (dirtyCamera || HasDirtyChildren2(layer)) {
      layer.node.setDirty(DIRTY_CONST2.CHILD_CACHE);
    } else {
      layer.children.length = 0;
    }
  });
}
