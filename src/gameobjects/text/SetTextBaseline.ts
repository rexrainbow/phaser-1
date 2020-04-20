import { IText } from './IText';

export function SetTextBaseline (baseline: CanvasTextBaseline, ...text: IText[])
{
    text.forEach(entity => {

        entity.textBaseline = baseline;
        entity.updateText();

    });
}
