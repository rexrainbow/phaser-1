export default function SetTextAlign(align, ...text) {
    text.forEach(entity => {
        entity.textAlign = align;
        entity.updateText();
    });
}
//# sourceMappingURL=SetTextAlign.js.map