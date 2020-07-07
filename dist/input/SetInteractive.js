function SetInteractive(...children) {
    children.forEach(child => {
        child.input.enabled = true;
    });
    return children;
}

export { SetInteractive };
