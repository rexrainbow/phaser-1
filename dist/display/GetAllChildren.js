import { DepthFirstSearch } from './DepthFirstSearch.js';

function GetAllChildren(parent, property, value) {
    const children = DepthFirstSearch(parent);
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

export { GetAllChildren };
