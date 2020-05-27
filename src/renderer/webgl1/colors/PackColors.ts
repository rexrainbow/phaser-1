import { ISprite } from '../../../gameobjects/sprite/ISprite';

export function PackColors <T extends ISprite> (sprite: T): T
{
    sprite.vertices.forEach(vertex =>
    {
        vertex.packColor();
    });

    return sprite;
}
