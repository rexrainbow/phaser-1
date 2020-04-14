import ISprite from './ISprite';
import Texture from '../../textures/Texture';
import Frame from '../../textures/Frame';
import GameInstance from '../../GameInstance';
import SetFrame from './SetFrame';

export default function SetTexture (key: string | Texture, frame: string | number | Frame, ...sprite: ISprite[])
{
    sprite.forEach(entity => {

        if (!key)
        {
            return;
        }
    
        if (key instanceof Texture)
        {
            entity.texture = key;
        }
        else
        {
            entity.texture = GameInstance.get().textures.get(key);
        }
    
        if (!entity.texture)
        {
            console.warn('Invalid Texture key: ' + key);
        }
        else
        {
            SetFrame(frame, entity);
        }

    });
}
