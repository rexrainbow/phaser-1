export default function SetLineWidth(width, ...text) {
    text.forEach(entity => {
        entity.lineWidth = width;
        entity.updateText();
    });
}
//# sourceMappingURL=SetLineWidth.js.map