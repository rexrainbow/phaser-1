import { IText } from './IText';

export function SetBackgroundStyle (style: string | CanvasGradient | CanvasPattern, cornerRadius: number | null, ...text: IText[])
{
    text.forEach(entity => {

        entity.backgroundStyle = style;

        if (cornerRadius !== null)
        {
            entity.cornerRadius = cornerRadius;
        }

        entity.updateText();

    });
}
