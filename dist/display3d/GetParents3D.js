function GetParents3D(child) {
    const parents = [];
    while (child.parent) {
        parents.push(child.parent);
        child = child.parent;
    }
    return parents;
}

export { GetParents3D };
