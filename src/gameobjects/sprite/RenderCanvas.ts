import { ISprite } from './ISprite';
import { UpdateVertices } from './UpdateVertices';

export function RenderCanvas (sprite: ISprite, ctx: CanvasRenderingContext2D): void
{
    const dirty = sprite.dirty;

    if (dirty.render)
    {
        UpdateVertices(sprite);

        dirty.render = false;
    }

    const frame = sprite.frame;

    if (!frame)
    {
        return;
    }

    const transform = sprite.transform;

    const { a, b, c, d, tx, ty } = transform.world;
    const { x, y } = transform.extent;

    ctx.save();

    ctx.setTransform(a, b, c, d, tx, ty);

    ctx.globalAlpha = sprite.alpha;

    ctx.drawImage(frame.texture.image as HTMLImageElement, frame.x, frame.y, frame.width, frame.height, x, y, frame.width, frame.height);

    ctx.restore();
}
