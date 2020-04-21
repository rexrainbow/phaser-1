import { IText } from './IText';

export function SetTextBaseline (baseline: CanvasTextBaseline, ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.textBaseline = baseline;
        entity.updateText();
    });
}
