import IText from './IText';

export default function SetText (value: string | string[], ...text: IText[])
{
    text.forEach(entity => {

        entity.setText(value);

    });
}
