import { IText } from './IText';

export function SetLineWidth (width: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.lineWidth = width;
        entity.updateText();

    });
}
