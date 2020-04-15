// Copy the values from the src Matrix to the given Canvas Rendering Context.
// This will use the Context.setTransform method.
export default function SetToContext(src, context) {
    const { a, b, c, d, tx, ty } = src;
    context.setTransform(a, b, c, d, tx, ty);
    return context;
}
//# sourceMappingURL=SetToContext.js.map