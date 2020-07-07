import { RemoveChildAt } from './RemoveChildAt.js';

function RemoveChildrenAt(parent, ...index) {
    const removed = [];
    index.sort((a, b) => a - b);
    index.reverse().forEach(i => {
        const child = RemoveChildAt(parent, i);
        if (child) {
            removed.push(child);
        }
    });
    return removed;
}

export { RemoveChildrenAt };
