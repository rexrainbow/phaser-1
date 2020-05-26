import '../../renderer/BindingQueue.js';
import '../Frame.js';
import { Texture } from '../Texture.js';
import { CreateCanvas } from '../CreateCanvas.js';

function SolidColorTexture(color = 'rgba(0,0,0,0)', width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    return new Texture(ctx.canvas);
}

export { SolidColorTexture };
