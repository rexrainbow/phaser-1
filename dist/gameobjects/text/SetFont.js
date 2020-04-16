export default function SetFont(font, ...text) {
    text.forEach(entity => {
        entity.font = font;
        entity.updateText();
    });
}
//# sourceMappingURL=SetFont.js.map