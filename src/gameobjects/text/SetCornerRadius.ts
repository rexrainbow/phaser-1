import { IText } from './IText';

export function SetCornerRadius (cornerRadius: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.cornerRadius = cornerRadius;
        entity.updateText();

    });
}
