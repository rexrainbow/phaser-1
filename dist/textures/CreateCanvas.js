export default function CreateCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas.getContext('2d');
}
//# sourceMappingURL=CreateCanvas.js.map