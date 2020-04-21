import { IText } from './IText';

export function SetLineSpacing (spacing: number, ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.lineSpacing = spacing;
        entity.updateText();
    });
}
