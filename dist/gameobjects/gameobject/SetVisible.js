export default function SetVisible(visible, ...child) {
    child.forEach(entity => {
        entity.visible = visible;
    });
}
//# sourceMappingURL=SetVisible.js.map