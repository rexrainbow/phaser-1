import './GetChild3DIndex.js';
import './RemoveChild3DAt.js';
import { RemoveChild3D } from './RemoveChild3D.js';

function RemoveChildren3D(parent, ...children) {
    children.forEach(child => {
        RemoveChild3D(parent, child);
    });
    return children;
}

export { RemoveChildren3D };
