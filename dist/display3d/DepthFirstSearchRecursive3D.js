function DepthFirstSearchRecursive3D(parent, output = []) {
    for (let i = 0; i < parent.numChildren; i++) {
        const child = parent.children[i];
        output.push(child);
        if (child.numChildren > 0) {
            DepthFirstSearchRecursive3D(child, output);
        }
    }
    return output;
}

export { DepthFirstSearchRecursive3D };
