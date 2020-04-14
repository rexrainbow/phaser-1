export default function SetBounds(x, y, width, height, ...child) {
    child.forEach(entity => {
        entity.bounds.set(x, y, width, height);
    });
}
//# sourceMappingURL=SetBounds.js.map