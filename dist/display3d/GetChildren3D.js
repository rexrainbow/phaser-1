function GetChildren3D(parent, property, value) {
    const children = parent.children;
    if (!property) {
        return [...children];
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

export { GetChildren3D };
