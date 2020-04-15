export default function SetSize(width, height, ...child) {
    child.forEach(entity => {
        entity.width = width;
        entity.height = height;
    });
}
//# sourceMappingURL=SetSize.js.map