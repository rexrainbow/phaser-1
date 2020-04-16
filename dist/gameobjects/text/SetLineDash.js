export default function SetLineDash(segments, ...text) {
    text.forEach(entity => {
        entity.lineDash = segments;
        entity.updateText();
    });
}
//# sourceMappingURL=SetLineDash.js.map