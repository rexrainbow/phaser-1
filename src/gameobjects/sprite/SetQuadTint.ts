import { DIRTY_CONST } from '../DIRTY_CONST';
import { ISprite } from './ISprite';

export function SetQuadTint <T extends ISprite> (topLeft: number, topRight: number, bottomLeft: number, bottomRight: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        const vertices = child.vertices;

        vertices[0].setAlpha(topLeft);
        vertices[1].setAlpha(topRight);
        vertices[2].setAlpha(bottomLeft);
        vertices[3].setAlpha(bottomRight);

        child.setDirty(DIRTY_CONST.COLORS);
    });

    return children;
}
