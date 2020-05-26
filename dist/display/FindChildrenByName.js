import { DepthFirstSearch } from './DepthFirstSearch.js';

function FindChildrenByName(parent, searchString) {
    const children = DepthFirstSearch(parent);
    const regex = RegExp(searchString);
    const results = [];
    children.forEach(child => {
        if (regex.test(child.name)) {
            results.push(child);
        }
    });
    return results;
}

export { FindChildrenByName };
