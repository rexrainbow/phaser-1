import { DepthFirstSearch3D } from './DepthFirstSearch3D.js';

function FindChildren3DByName(parent, searchString) {
    const children = DepthFirstSearch3D(parent);
    const regex = RegExp(searchString);
    const results = [];
    children.forEach(child => {
        if (regex.test(child.name)) {
            results.push(child);
        }
    });
    return results;
}

export { FindChildren3DByName };
