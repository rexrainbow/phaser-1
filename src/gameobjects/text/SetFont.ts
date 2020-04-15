import IText from './IText';

export default function SetFont (font: string, ...text: IText[])
{
    text.forEach(entity => {

        entity.font = font;
        entity.updateText();

    });
}
