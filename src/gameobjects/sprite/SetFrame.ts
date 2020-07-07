import { Frame } from '../../textures/Frame';
import { ISprite } from './ISprite';
import { Texture } from '../../textures';

export function SetFrame <T extends ISprite> (texture: Texture, key?: string | number | Frame, ...children: T[]): T[]
{
    const frame = texture.getFrame(key);

    const { u0, u1, v0, v1, pivot } = frame;

    children.forEach(child =>
    {
        //  TODO - If frame is dirty, reset it anyway
        if (!child || frame === child.frame)
        {
            return;
        }

        child.frame = frame;

        if (pivot)
        {
            child.setOrigin(pivot.x, pivot.y);
        }

        child.frame.setExtent(child);

        child.hasTexture = true;

        const vertices = child.vertices;

        //  This rarely changes, so we'll set it here, rather than every game step:
        vertices[0].setUV(u0, v0);
        vertices[1].setUV(u0, v1);
        vertices[2].setUV(u1, v1);
        vertices[3].setUV(u1, v0);
    });

    return children;
}
