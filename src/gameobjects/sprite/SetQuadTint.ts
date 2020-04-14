import PackColors from '../../renderer/PackColors';
import ISprite from './ISprite';

export default function SetQuadTint (topLeft: number, topRight: number, bottomLeft: number, bottomRight: number, ...sprite: ISprite[])
{
    sprite.forEach(entity => {

        let tint = entity.vertexTint;

        tint[0] = topLeft;
        tint[1] = topRight;
        tint[2] = bottomLeft;
        tint[3] = bottomRight;
    
        PackColors(entity);
    
    });
}
