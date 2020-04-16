export default function SetFillStyle(style, ...text) {
    text.forEach(entity => {
        entity.fillStyle = style;
        entity.updateText();
    });
}
//# sourceMappingURL=SetFillStyle.js.map