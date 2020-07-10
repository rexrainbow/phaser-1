import './GetChildIndex.js';
import './RemoveChildAt.js';
import { RemoveChild } from './RemoveChild.js';

function RemoveChildren(parent, ...children) {
    children.forEach(child => {
        RemoveChild(parent, child);
    });
    return children;
}

export { RemoveChildren };
