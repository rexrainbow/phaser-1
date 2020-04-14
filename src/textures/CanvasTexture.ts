import CreateCanvas from './CreateCanvas';
import Texture from './Texture';

export default function CanvasTexture (width: number = 32, height: number = 32): Texture
{
    const ctx = CreateCanvas(width, height);

    return new Texture(ctx.canvas);
}
