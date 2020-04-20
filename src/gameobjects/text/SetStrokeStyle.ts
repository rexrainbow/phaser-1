import { IText } from './IText';

export function SetStrokeStyle (style: string | CanvasGradient | CanvasPattern, lineWidth: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.strokeStyle = style;

        if (lineWidth)
        {
            entity.lineWidth = lineWidth;
        }

        entity.updateText();

    });
}
