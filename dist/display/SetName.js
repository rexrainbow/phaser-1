function SetName(name, ...children) {
    children.forEach(child => {
        child.name = name;
    });
    return children;
}

export { SetName };
