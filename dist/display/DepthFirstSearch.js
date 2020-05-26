function DepthFirstSearch(parent) {
    const stack = [parent];
    const output = [];
    while (stack.length > 0) {
        const node = stack.shift();
        output.push(node);
        const numChildren = node.numChildren;
        if (numChildren > 0) {
            for (let i = numChildren - 1; i >= 0; i--) {
                stack.unshift(node.children[i]);
            }
        }
    }
    output.shift();
    return output;
}

export { DepthFirstSearch };
