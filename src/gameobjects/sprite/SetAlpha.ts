import { ISprite } from './ISprite';

export function SetAlpha <T extends ISprite> (alpha: number, ...children: T[]): T[]
{
    children.forEach(child =>
    {
        child.alpha = alpha;
    });

    return children;
}
