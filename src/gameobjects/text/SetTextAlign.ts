import { IText } from './IText';

export function SetTextAlign (align: CanvasTextAlign, ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.textAlign = align;
        entity.updateText();
    });
}
