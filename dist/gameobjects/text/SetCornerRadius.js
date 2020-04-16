export default function SetCornerRadius(cornerRadius, ...text) {
    text.forEach(entity => {
        entity.cornerRadius = cornerRadius;
        entity.updateText();
    });
}
//# sourceMappingURL=SetCornerRadius.js.map