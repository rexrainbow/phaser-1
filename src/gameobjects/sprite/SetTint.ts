import { ISprite } from './ISprite';

export function SetTint <T extends ISprite> (tint: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.tint = tint;
    });

    return children;
}
