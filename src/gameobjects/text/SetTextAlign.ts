import { IText } from './IText';

export function SetTextAlign (align: CanvasTextAlign, ...text: IText[])
{
    text.forEach(entity => {

        entity.textAlign = align;
        entity.updateText();

    });
}
