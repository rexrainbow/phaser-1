import { IText } from './IText';

export function SetFillStyle (style: string | CanvasGradient | CanvasPattern, ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.fillStyle = style;
        entity.updateText();
    });
}
