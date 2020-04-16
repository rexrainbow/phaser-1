let _bgColor = 0;
function BackgroundColor(color = 0) {
    return () => {
        _bgColor = color;
    };
}
function GetBackgroundColor() {
    return _bgColor;
}
export { BackgroundColor, GetBackgroundColor };
//# sourceMappingURL=BackgroundColor.js.map