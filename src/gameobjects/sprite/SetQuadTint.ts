import { PackColors } from '../../renderer/webgl1/PackColors';
import { ISprite } from './ISprite';

export function SetQuadTint (topLeft: number, topRight: number, bottomLeft: number, bottomRight: number, ...sprite: ISprite[]): void
{
    sprite.forEach(entity =>
    {
        const tint = entity.vertexTint;

        tint[0] = topLeft;
        tint[1] = topRight;
        tint[2] = bottomLeft;
        tint[3] = bottomRight;
    
        PackColors(entity);
    });
}
