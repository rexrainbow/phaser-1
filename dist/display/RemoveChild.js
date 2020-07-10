import { GetChildIndex } from './GetChildIndex.js';
import { RemoveChildAt } from './RemoveChildAt.js';

function RemoveChild(parent, child) {
    const currentIndex = GetChildIndex(parent, child);
    if (currentIndex > -1) {
        RemoveChildAt(parent, currentIndex);
    }
    return child;
}

export { RemoveChild };
