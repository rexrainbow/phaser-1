import IText from './IText';

export default function SetCornerRadius (cornerRadius: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.cornerRadius = cornerRadius;
        entity.updateText();

    });
}
