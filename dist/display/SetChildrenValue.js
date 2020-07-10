import { DepthFirstSearch } from './DepthFirstSearch.js';

function SetChildrenValue(parent, property, value) {
    const children = DepthFirstSearch(parent);
    children.forEach(child => {
        const descriptor = Object.getOwnPropertyDescriptor(child, property);
        if (descriptor) {
            descriptor.set(value);
        }
    });
    return children;
}

export { SetChildrenValue };
