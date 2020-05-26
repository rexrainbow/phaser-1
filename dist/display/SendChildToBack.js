import { GetChildIndex } from './GetChildIndex.js';
import { DIRTY_CONST } from '../gameobjects/DIRTY_CONST.js';

function SendChildToBack(parent, child) {
    const parentChildren = parent.children;
    const currentIndex = GetChildIndex(parent, child);
    if (currentIndex !== -1 && currentIndex > 0) {
        parentChildren.splice(currentIndex, 1);
        parentChildren.unshift(child);
        child.setDirty(DIRTY_CONST.TRANSFORM);
    }
    return child;
}

export { SendChildToBack };
