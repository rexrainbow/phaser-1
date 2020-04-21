import { IText } from './IText';

export function SetFont (font: string, ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.font = font;
        entity.updateText();
    });
}
