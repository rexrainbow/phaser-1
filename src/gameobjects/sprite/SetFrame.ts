import { Frame } from '../../textures/Frame';
import { ISprite } from './ISprite';
import { Texture } from '../../textures';

export function SetFrame <T extends ISprite> (texture: Texture, key?: string | number | Frame, ...children: T[]): T[]
{
    const frame = texture.getFrame(key);

    children.forEach(child =>
    {
        if (frame === child.frame)
        {
            return;
        }

        child.frame = frame;

        child.transform.setSize(frame.sourceSizeWidth, frame.sourceSizeHeight);

        child.bounds.setArea(child.x, child.y, child.width, child.height);

        const pivot = frame.pivot;

        if (pivot)
        {
            child.transform.setOrigin(pivot.x, pivot.y);
        }

        const data = child.vertexData;

        //  This rarely changes, so we'll set it here, rather than every game step:

        data[2] = frame.u0;
        data[3] = frame.v0;

        data[8] = frame.u0;
        data[9] = frame.v1;

        data[14] = frame.u1;
        data[15] = frame.v1;

        data[20] = frame.u1;
        data[21] = frame.v0;

        child.frame.setExtent(child);

        child.dirty.setRender();

        child.hasTexture = true;
    });

    return children;
}
