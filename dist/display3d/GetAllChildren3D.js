import { DepthFirstSearch3D } from './DepthFirstSearch3D.js';

function GetAllChildren3D(parent, property, value) {
    const children = DepthFirstSearch3D(parent);
    if (!property) {
        return children;
    }
    const results = [];
    children.forEach(child => {
        const descriptor = Object.getOwnPropertyDescriptor(child, property);
        if (descriptor && (value === undefined || value === descriptor.value)) {
            results.push(child);
        }
    });
    return results;
}

export { GetAllChildren3D };
