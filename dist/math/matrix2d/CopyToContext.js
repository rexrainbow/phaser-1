// Copy the values from src Matrix to the given Canvas Rendering Context.
// This will use the Context.transform method.
export default function CopyToContext(src, context) {
    const { a, b, c, d, tx, ty } = src;
    context.transform(a, b, c, d, tx, ty);
    return context;
}
//# sourceMappingURL=CopyToContext.js.map