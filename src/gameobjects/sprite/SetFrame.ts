import Frame from '../../textures/Frame';
import ISprite from './ISprite';

export default function SetFrame (key?: string | number | Frame, ...sprite: ISprite[])
{
    sprite.forEach(entity => {

        let frame = entity.texture.get(key);

        if (frame === entity.frame)
        {
            return;
        }
    
        entity.frame = frame;
    
        entity.setSize(frame.sourceSizeWidth, frame.sourceSizeHeight);
        entity.setBounds(entity.x, entity.y, entity.width, entity.height);
    
        if (frame.pivot)
        {
            entity.setOrigin(frame.pivot.x, frame.pivot.y);
        }
    
        let data = entity.vertexData;
    
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
