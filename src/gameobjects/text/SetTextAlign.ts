import IText from './IText';

export default function SetTextAlign (align: CanvasTextAlign, ...text: IText[])
{
    text.forEach(entity => {

        entity.textAlign = align;
        entity.updateText();

    });
}
