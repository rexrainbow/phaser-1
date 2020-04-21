import { IText } from './IText';

export function SetLineDash (segments: number[], ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.lineDash = segments;
        entity.updateText();
    });
}
