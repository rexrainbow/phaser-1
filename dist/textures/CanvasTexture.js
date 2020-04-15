import CreateCanvas from './CreateCanvas';
import Texture from './Texture';
export default function CanvasTexture(width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    return new Texture(ctx.canvas);
}
//# sourceMappingURL=CanvasTexture.js.map