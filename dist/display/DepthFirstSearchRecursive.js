export function DepthFirstSearchRecursive(parent, output = []) {
  for (let i = 0; i < parent.numChildren; i++) {
    const child = parent.children[i];
    output.push(child);
    if (child.numChildren > 0) {
      DepthFirstSearchRecursive(child, output);
    }
  }
  return output;
}
