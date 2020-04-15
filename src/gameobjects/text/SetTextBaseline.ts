import IText from './IText';

export default function SetTextBaseline (baseline: CanvasTextBaseline, ...text: IText[])
{
    text.forEach(entity => {

        entity.textBaseline = baseline;
        entity.updateText();

    });
}
