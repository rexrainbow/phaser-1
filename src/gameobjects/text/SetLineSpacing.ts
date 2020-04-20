import { IText } from './IText';

export function SetLineSpacing (spacing: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.lineSpacing = spacing;
        entity.updateText();

    });
}
