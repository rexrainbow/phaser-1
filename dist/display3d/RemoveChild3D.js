import { GetChild3DIndex } from './GetChild3DIndex.js';
import { RemoveChild3DAt } from './RemoveChild3DAt.js';

function RemoveChild3D(parent, child) {
    const currentIndex = GetChild3DIndex(parent, child);
    if (currentIndex > -1) {
        RemoveChild3DAt(parent, currentIndex);
    }
    return child;
}

export { RemoveChild3D };
