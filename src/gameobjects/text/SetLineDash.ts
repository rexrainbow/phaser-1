import IText from './IText';

export default function SetLineDash (segments: number[], ...text: IText[])
{
    text.forEach(entity => {

        entity.lineDash = segments;
        entity.updateText();

    });
}
