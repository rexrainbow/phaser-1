import { Frame } from '../../textures/Frame';
import { ISprite } from './ISprite';
import { Texture } from '../../textures';

export function SetFrame (texture: Texture, key?: string | number | Frame, ...sprite: ISprite[]): void
{
    const frame = texture.get(key);

    sprite.forEach(entity =>
    {
        if (frame === entity.frame)
        {
            return;
        }

        entity.frame = frame;

        entity.setSize(frame.sourceSizeWidth, frame.sourceSizeHeight);
        entity.setBounds(entity.x, entity.y, entity.width, entity.height);

        if (frame.pivot)
        {
            entity.originX = frame.pivot.x;
            entity.originY = frame.pivot.y;
        }

        const data = entity.vertexData;

        //  This rarely changes, so we'll set it here, rather than every game step:

        data[2] = frame.u0;
        data[3] = frame.v0;

        data[8] = frame.u0;
        data[9] = frame.v1;

        data[14] = frame.u1;
        data[15] = frame.v1;

        data[20] = frame.u1;
        data[21] = frame.v0;

        entity.setDirtyRender();

        entity.hasTexture = true;
    });
}
