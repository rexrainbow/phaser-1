import IText from './IText';

export default function SetLineSpacing (spacing: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.lineSpacing = spacing;
        entity.updateText();

    });
}
