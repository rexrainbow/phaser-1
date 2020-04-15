import IText from './IText';

export default function SetFillStyle (style: string | CanvasGradient | CanvasPattern, ...text: IText[])
{
    text.forEach(entity => {

        entity.fillStyle = style;
        entity.updateText();

    });
}
