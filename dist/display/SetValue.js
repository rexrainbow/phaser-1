function SetValue(property, value, ...children) {
    children.forEach(child => {
        const descriptor = Object.getOwnPropertyDescriptor(child, property);
        if (descriptor) {
            descriptor.set(value);
        }
    });
    return children;
}

export { SetValue };
