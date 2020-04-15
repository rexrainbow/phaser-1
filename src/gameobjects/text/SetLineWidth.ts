import IText from './IText';

export default function SetLineWidth (width: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.lineWidth = width;
        entity.updateText();

    });
}
