function CopyFrom(source, dest) {
    const { x, y, z } = source;
    return dest.set(x, y, z);
}

export { CopyFrom };
