export default function SetTextBaseline(baseline, ...text) {
    text.forEach(entity => {
        entity.textBaseline = baseline;
        entity.updateText();
    });
}
//# sourceMappingURL=SetTextBaseline.js.map