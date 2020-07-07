import '../../renderer/BindingQueue.js';
import '../Frame.js';
import { Texture } from '../Texture.js';
import { CreateCanvas } from '../CreateCanvas.js';

function CanvasTexture(width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    return new Texture(ctx.canvas);
}

export { CanvasTexture };
